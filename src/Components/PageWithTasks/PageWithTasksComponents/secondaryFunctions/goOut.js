const goOut = (logout, removePerson) => {
    return () => logout() && removePerson()
}

export default goOut;