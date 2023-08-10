

export const windDirection = (degree) => {
    let text = ''
    switch (degree) {
        // case 0 <=degree <=22.5:
        //     text='N'
        //     break
        case 22.5 <= degree <= 44:
            text = 'NNE'
            break
        case 45 <= degree <= 67.4:
            text = 'NE'
            break
        case 67.5 <= degree <= 89:
            text = 'ENE'
            break
        case 90 <= degree <= 112.4:
            text = 'E'
            break
        case 112.5 <= degree <= 134:
            text = 'ESE'
            break
        case 135 <= degree <= 157.4:
            text = 'SE'
            break
        case 157.5 <= degree <= 179:
            text = 'SSE'
            break
        case 180 <= degree <= 202.4:
            text = 'S'
            break

        case 202.5 <= degree <= 224:
            text = 'SSW'
            break
        case 225 <= degree <= 247.4:
            text = 'SW'
            break
        case 247.5 <= degree <= 269:
            text = 'WSW'
            break
        case 270 <= degree <= 292.4:
            text = 'W'
            break
        case 292.5 <= degree <= 314:
            text = 'WNW'
            break
        case 315 <= degree <= 337.4:
            text = 'NW'
            break
        case 337.5 <= degree <= 359:
            text = 'NNW'
            break

        default:
            text = 'N'
            break
    }
    return text
}
