import _ from 'lodash';

export const filterByDone = (state) => {
    const copy = _.cloneDeep(state)
    const filtered =  copy.quests.filter(task => task.status === 'done')
    copy.quests = filtered
    return copy
};
export const filterByPerformed = (state) => {
    const copy = _.cloneDeep(state)
    const filtered =  copy.quests.filter(task => task.status === 'performed')
    copy.quests = filtered
    return copy
};