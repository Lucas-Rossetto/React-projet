const INITIAL_STATE = {
    entities: []
};
    
const messages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case 'ADD_MESSAGE':
   
    return { entities: [...state.entities, {body: action.message, username: action.username}]}

    default: return state
    }
}