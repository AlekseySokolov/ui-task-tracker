const userValid = (values, dataState, getData ,login, getPerson) => {
    if(dataState.some(obj => {
        return obj.username === values.username &&
               obj.password === values.password ?
               getData(obj) && getPerson(obj) :
               null;
    })){
      return login();
    } else {
        alert('Wrong username or password')
    }

}
export default userValid;


