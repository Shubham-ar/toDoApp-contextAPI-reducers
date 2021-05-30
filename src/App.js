import React from 'react'
import { useReducer } from 'react'
// we are not using useContext this time
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { TodoContext } from './context/TodoContext'
import todoReducer from './context/reducer'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
//uuid is used to install UUID which is a tool used to generate unique ids


const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  // useReducer accepts a reducer function as first parameter and initial state as second parameter.
  // todos: array of current state value
  // dispatch: function returned by useReducer
  // useReducer returns an array which holds the current state value and a dispatch function to which you can pass an action and then invoke
  // ACTION: an object that tells the reducer how to change state. 
  // ACTION MUST CONTAIN 'type' and can contain 'payload' properties

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>TodoApp with Context API</h1>
        <TodoForm />
        <Todos />
      </Container>

    </TodoContext.Provider>
  );

}
export default App;