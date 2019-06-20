const addTaskToState = (state, payload) => {
    state.quests.push({
        "id" : state.quests[state.quests.length - 1].id + 1,
        "title" : payload,
        "description" :
            "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit, " +
            "sed do eiusmod tempor",
        "date" :
             new Date()
            .toLocaleDateString()
            .split('.').reverse().join('-'),
        "importance"  : "low",
        "planned days" : "11",
        "elapsed days" : "test elapsed",
        "status" : "performed"
    })
    return state
}

export default addTaskToState;