import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";



const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const add = () => {
        if (todo === "") {
            alert("Input is Empty");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    };
    //console.log("props from store", props);
    return (
        <div className="container mt-5 bg-dark pt-4  " >
            <h2 className="text-white p-2 bg-danger m-4"> TO-DO LIST </h2>

            <div className="row ">
                <div className="col-md-6 mx-auto text-center">
                    <div className="form-group my-4">
                        <input
                            type="text"
                            onChange={(e) => handleChange(e)}
                            className="form-control text-center"
                            value={todo}
                            placeholder="Enter your todos..."
                        />


                    </div>

                    <div className="form-group my-2">
                        <button

                            className="btn btn-success"
                            onClick={() => add()}  >
                            Add

                        </button>

                    </div>

                </div>


            </div>


        </div>





    );
};
//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);