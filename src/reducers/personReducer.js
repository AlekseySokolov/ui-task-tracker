const personReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PERSON' :
            return state = action.payload
        case 'REMOVE_PERSON' :
            return state = action.payload
        default :
            return state
    }
};

export default personReducer;