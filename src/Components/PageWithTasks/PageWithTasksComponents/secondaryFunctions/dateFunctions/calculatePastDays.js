const calculatePastDays = (date) => {
    return parseInt((new Date().getTime() - new Date(date.split('.').reverse().join('-')).getTime()) / 1000 / 60 /60 /24)
}

export default calculatePastDays;