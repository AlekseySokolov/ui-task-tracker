const taskDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_QUEST_DETAIL" :
            return state = action.payload
        case "REMOVE_QUEST_DETAIL" :
            return state = {}
        default :
            return state
    }
}

export default taskDetailReducer;