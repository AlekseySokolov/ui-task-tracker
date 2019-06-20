const sortStatusDoneUp = (state) => {
    state['quests'].sort((a, b) => a.status.length - b.status.length)
    return state
};
export default sortStatusDoneUp;