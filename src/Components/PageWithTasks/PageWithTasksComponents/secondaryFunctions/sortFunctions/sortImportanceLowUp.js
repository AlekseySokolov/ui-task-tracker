const sortImportanceLowUp = (state) => {
    state['quests'].sort((a, b) => a.importance.length - b.importance.length)
    return state
};
export default sortImportanceLowUp;