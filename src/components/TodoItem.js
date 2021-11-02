import React, { useRef } from 'react'


const Todoitem = (props) => {
    const { item, updateTodo, removeTodo, completeTodo } = props;

    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();

    };

    const update = (id, value, e) => {
        if (e.which === 13) {
            //13 is key code for entry
            updateTodo({ id, item: value })
            inputRef.current.disabled = true;
        }

    };

    return (
        <div className="container my-5">
            <li key={item.id} className="d-inline">
                <textarea
                    className="form-control mb-4"
                    ref={inputRef}
                    disabled={inputRef}
                    defaultValue={item.item}
                    onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
                />
                <button onClick={() => changeFocus()} className="btn btn-primary mx-2">Edit</button>
                <button onClick={() => completeTodo(item.id)} className="btn btn-success mx-2">Complete</button>

                <button onClick={() => props.removeTodo(item.id)} className="btn btn-danger mx-2">Delete</button>{" "}</li>
        </div>
    )
}

export default Todoitem;
