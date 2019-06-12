export const login = () => ({type : 'LOGIN'});
export const logout = () => ({type : 'LOGOUT'});

export const getData = (payload) => ({type : 'GET_DATA', payload : payload});
export const getPerson = (payload) => ({type : 'GET_PERSON', payload : payload});
export const removePerson = () => ({type : 'REMOVE_PERSON'});

export const sortByStatus = (payload) => ({type:'SORT_PERSON_VALUES', payload : payload});

export const showBrief = () => ({type : 'SHOW_BRIEF'});
export const showDetail = () => ({type : 'SHOW_DETAIL'});

export const showTaskDetail = () => ({type : 'SHOW_TASK_IN_DETAIL'});
export const getQuestDetail = (payload) => ({type: 'GET_QUEST_DETAIL', payload : payload})
export const removeQuestDetail = (payload) => ({type: 'REMOVE_QUEST_DETAIL', payload : payload})