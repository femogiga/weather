import moment from "moment";
export const unitConverter = (temp, unit) => {
    let newTemp = 0;
    if (unit.toLowerCase() === 'f') {
        newTemp = ((temp - 273.15) * 9 / 5) + 32
        return newTemp.toFixed()
    }

    newTemp = temp - 273.15
    return newTemp.toFixed()

}


export const distanceConverter = (dataInKM) => {
    return (dataInKM / 1600).toFixed(1).replace('.', ',')
}




export const dateConverter = (date) => {
    // const datex = 1691582400

    const today = moment(new Date()).format('ddd, D MMM')
    let formattedDate = moment.unix(date).format('ddd, D MMM')
    if (formattedDate === today) {
        return 'Tomorrow '
    }
    return formattedDate

}
