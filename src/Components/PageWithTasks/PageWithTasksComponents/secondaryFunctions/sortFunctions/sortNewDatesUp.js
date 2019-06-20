const sortNewDatesUp = (state) => {
    state['quests'].sort((a, b) => a.date < b.date ? 1 : -1)
    return state
};
export default sortNewDatesUp;