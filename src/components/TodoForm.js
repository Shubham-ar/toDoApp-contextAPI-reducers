import React, { useState, useContext } from 'react'
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"

import { v4 } from "uuid"
import { TodoContext } from "../context/TodoContext"
import { ADD_TODO} from "../context/action.types"


// this file takes the value PROVIDED by the app.js of todo,dispatch (of useReducer) using context.
// todos is the array of current state value
// dispatch is the function returned by userReducer to which we can pass an action and then invoke


const TodoForm = () => {

    const [todoString, setTodoString] = useState("");

    const { dispatch } = useContext(TodoContext);

    const handleSubmit = (e) => {
        // to prevent the default clearing action of form submission
        e.preventDefault();
        
        // check to see if the container has no text inserted
        if (todoString === "") {
            return alert("Please enter Todo ")
        }

        // creating a singular todo value to enter in dispatch, so as to make it inside of the state array
        const todo = {
            todoString,
            id: v4()
        }

        // the dispatch function accepts an action object that contains the type of action to be invoked.
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        
        setTodoString("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup >
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Your Next Todo"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                            color="warning"
                        >ADD</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;