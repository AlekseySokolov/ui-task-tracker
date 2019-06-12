let currentUser = (dataState, personState) => {
    return dataState.filter(obj => obj.username === personState.username)[0]
}

export default currentUser;