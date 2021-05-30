import React, { useContext } from 'react'
import { ListGroup, ListGroupItem } from "reactstrap"
import { FaCheckDouble, } from "react-icons/fa"
import { TodoContext } from "../context/TodoContext"
import { REMOVE_TODO } from "../context/action.types"

// this file takes the value PROVIDED by the app.js of todo,dispatch (of useReducer) using context.
// todos is the array of current state value
// dispatch is the function returned by userReducer to which we can pass an action and then invoke


const Todos = () => {
    const { todos, dispatch } = useContext(TodoContext)

    return (
        <ListGroup className=" items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="float-right" onClick={() => {
                        dispatch({
                            type: REMOVE_TODO,
                            payload: todo.id
                        })
                    }}>
                        <FaCheckDouble />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}


export default Todos;
