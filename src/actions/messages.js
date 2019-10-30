export const removeMessage = index => {
    return {
        type: REMOVE_MESSAGE,
        index,
    }
}

export const addMessage = (message , username) => {
    return {
        type: ADD_MESSAGE,
        message,
        username,
    }
}

function getMessages() {
        return (dispatch) => {
        dispatch({type: GET_MESSAGES_PENDING})
        return fetch("https://api.example.com/message")
        .then(response => response.json())
        .then(json => {
        dispatch({type: GET_MESSAGES_SUCCESS, messages: json.messages})
        })
        .catch(err => dispatch({type: GET_MESSAGES_ERROR, error: err}));
        }
}

export const loadMessagePending = () => {
    return {
        type : LOAD_MESSAGES_PENDING
    }
}

export const loadMessageSuccess = () => {
    return {
        type : LOAD_MESSAGES_SUCCESS
    }
}

export const loadMessageError = () => {
    return {
        type : LOAD_MESSAGES_ERROR
    }
}