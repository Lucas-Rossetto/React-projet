export const removeMessage = index => {
    return {
        type: REMOVE_MESSAGE
    }
}

export const addMessage = index => {
    return {
        type: ADD_MESSAGE
    }
}

export const getMessage = () => {
    return (dispatch) => {
        dispatch ({GET_MESSAGE_ACTION });
    }
}