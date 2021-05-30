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