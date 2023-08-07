import shower from '../photos/Shower.png'
import clear from '../photos/Clear.png';
import hail from '../photos/Hail.png';
import heavyCloud from '../photos/HeavyCloud.png';
import heavyRain from '../photos/HeavyRain.png';
import lightCloud from '../photos/LightCloud.png';
import lightRain from '../photos/LightRain.png';
import sleet from '../photos/Sleet.png';
import snow from '../photos/Snow.png';
import thunderstorm from '../photos/Thunderstorm.png'

const Avatar = ({ src, condition }) => {

    switch (condition.toLowerCase()) {
        case 'hail':
            src = hail
            break
        case 'overcast clouds':
            src = heavyCloud
            break
        case 'heavy rain':
            src = heavyRain
            break
        case 'light clouds':
        case 'few clouds':
        case 'broken clouds':
        case 'scattered clouds':
            src = lightCloud
            break
        case 'light rain':
        case 'moderate rain':
       
            src = lightRain
            break
        case 'sleet':
            src = sleet
            break
        case 'shower rain':
            src = shower
            break
        case 'snow':
        case 'light snow':
        case 'moderate snow':
        case 'heavy snow':
            src = snow
            break
        case 'thunderstorm':
            src = thunderstorm
            break;
        default:
            src = clear
            break
    }
    // src = shower

    return (
        <div className='flex flex-just-cen flow-2'>
            <img src={src} />
        </div>
    )
}


export default Avatar
