const userValid = (values, dataState, getPerson ,login) => {
    if(dataState.some(obj => {
        return obj.username === values.username &&
               obj.password === values.password ?
               getPerson(obj) :
               null;
    })){
      return login();
    } else {
        alert('Wrong username or password')
    }

}
export default userValid;