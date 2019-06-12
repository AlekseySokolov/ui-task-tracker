const sortByStatusDone = (user) => {
    user["quests"].sort((a, b) => a.status > b.status ? 1: -1)
    return user;
};

export default sortByStatusDone;