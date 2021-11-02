import React from 'react'
import { connect } from 'react-redux'
import { addTodos, removeTodos, updateTodos, completeTodos } from "../redux/reducer";
import Todoitem from './TodoItem';
import { useState } from 'react'



const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
};





const Displaytodos = (props) => {
    const [sort, setSort] = useState("active")
    return (

        <div className="container py-4 bg-dark">
            <div className="col-md-6 mx-auto text-center">
                <button onClick={() => setSort("active")} className="btn btn-primary mx-2">Active</button>
                <button onClick={() => setSort("completed")} className="btn btn-warning mx-2">Completed</button>
                <button onClick={() => setSort("all")} className="btn btn-danger mx-2">All</button>

            </div>

            <ul>
                {
                    props.todos.length > 0 && sort === "active" ?

                        props.todos.map(item => {
                            return (
                                item.completed === false && (
                                    <Todoitem

                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo}

                                    />
                                )

                            )
                        })
                        : null}

                {/* for completed */}

                {props.todos.length > 0 && sort === "completed"
                    ? props.todos.map((item) => {
                        return (
                            item.completed === true && (
                                <Todoitem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                />
                            )
                        );
                    })
                    : null}
                {/* for all items */}
                {props.todos.length > 0 && sort === "all"
                    ? props.todos.map((item) => {
                        return (
                            <Todoitem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        );
                    })
                    : null}

            </ul>
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Displaytodos)
