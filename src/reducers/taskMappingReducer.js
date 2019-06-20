const initialValue = "briefly"

const taskMappingReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'SHOW_BRIEF' :
            return state = initialValue
        case 'SHOW_DETAIL' :
            return state = 'detail'
        case 'SHOW_SCRUM' :
            return state = 'scrum'
        case 'SHOW_TASK_IN_DETAIL' :
            return state = 'taskDetail'
        default :
            return state
    }
};

export default taskMappingReducer;