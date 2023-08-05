
export const unitConverter = (temp, unit) => {
    let newTemp = 0;
    if (unit.toLowerCase() === 'f') {
        newTemp = (temp - 273.15) * 9 / 5 + 32
        return newTemp.toFixed()
    }

    newTemp = temp - 273.15
    return newTemp.toFixed()

}


export const distanceConverter = (dataInKM) => {
    return (dataInKM / 1600).toFixed(1).replace('.', ',')
}
