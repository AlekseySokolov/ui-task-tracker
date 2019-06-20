const sortStatusDoneUp = (state) => {
    state['quests'].sort((a, b) => b.status.length - a.status.length)
    return state
};
export default sortStatusDoneUp;