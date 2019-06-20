const goOut = (logout) => {
    return () => logout()
}

export default goOut;