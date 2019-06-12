const sortByStatusPerformed = (user) => {
    user["quests"].sort((a, b) => a.status < b.status ? 1: -1)
    return user;
}

export default sortByStatusPerformed;