const sortOldDatesUp = (state) => {
    state['quests'].sort((a, b) => b.date < a.date ? 1 : -1)
    return state
};
export default sortOldDatesUp;