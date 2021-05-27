import React from 'react'
import {useReducer} from 'react'
// we are not using useContext this time
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {TodoContext} from './context/TodoContext'
import todoReducer from './context/reducer'

const App=()=>{
  const [todos,dispatch]=useReducer(todoReducer,[]);
  return(
    <TodoContext.Provider value={{todos,dispatch}}>
      <Container fluid>
        <h1>TodoApp with Context API</h1>
      </Container>

    </TodoContext.Provider>
  );

}
export default App;