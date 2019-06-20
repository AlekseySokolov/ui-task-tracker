export const login = () => ({type : 'LOGIN'});
export const logout = () => ({type : 'LOGOUT'});

export const getData = (payload) => ({type : 'GET_DATA', payload : payload});

export const getPerson = (payload) => ({type : 'GET_PERSON', payload : payload});
export const removePerson = (payload) => ({type : 'REMOVE_PERSON', payload : payload});

export const onlyDoneTasks = (payload) => ({type : 'ONLY_DONE', payload : payload});
export const onlyPerformedTasks = (payload) => ({type : 'ONLY_PERFORMED', payload : payload});

export const showBrief = () => ({type : 'SHOW_BRIEF'});
export const showDetail = () => ({type : 'SHOW_DETAIL'});
export const showScrum = () => ({type : 'SHOW_SCRUM'});

export const showTaskDetail = () => ({type : 'SHOW_TASK_IN_DETAIL'});
export const getQuestDetail = (payload) => ({type: 'GET_QUEST_DETAIL', payload : payload})
export const removeQuestDetail = (payload) => ({type: 'REMOVE_QUEST_DETAIL', payload : payload})

export const sortStatusDoneUp = () => ({type:'SORT_STATUS_DONE_UP'});
export const sortStatusPerformedUp = () => ({type:'SORT_STATUS_PERFORMED_UP'});

export const sortNewDatesUp = () => ({type:'NEW_DATES_UP'});
export const sortOldDatesUp = () => ({type:'OLD_DATES_UP'});

export const sortImportanceLowUp = () => ({type:'SORT_IMPORTANCE_LOW_UP'});
export const sortImportanceHighUp = () => ({type:'SORT_IMPORTANCE_HIGH_UP'});

export const addTaskFormOpen = () => ({type: 'OPEN'});
export const addTaskFormClose = () => ({type: 'CLOSE'});

export const addTask = (payload) => ({type: 'ADD_TASK', payload : payload});