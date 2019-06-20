const sortImportanceHighUp = (state) => {
    state['quests'].sort((a, b) => b.importance.length - a.importance.length)
    return state
};
export default sortImportanceHighUp;