import { ADD_TODO, REMOVE_TODO } from "./action.types"

// Whenever someone will use this File, he will provide us a state(state is centra place where everything is stored)
// Action is the action we want to perform on that state

export default (state, action) => {
    //we are using action.type to restrict the things that are mentioned in actions, so it will either be ADDTODO or REMOVETODO
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        // [] represents an array, we are loading entire array like [0,1,2,3,4,action.payload]
        // thus we are hardcoding the current payload value inside of the array
        // OBJECTIVE: Take todo string and add it to the state
        // load the values of the state and do action.payload
        // action is an object which consist of variety of things
        // payload is the information that it carries with it
        // in our case it carries a string

        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        // state is iteratable
        // filter allows us to pass on simple callback method.
        // filter iterates through each and every todo and we are creating a new list of it
        // all the values which evaluate to true are carried forward to the new array
        // else they are dropped .
        // search js filter array for more..

        default:
            return state;
        // return state as it is , we need not do anything else.
    }
}