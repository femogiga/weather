
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import clear from '../../photos/Clear.png';
import hail from '../../photos/Hail.png';
import heavyClound from '../../photos/HeavyCloud.png';
import heavyRain from '../../photos/HeavyRain.png';
import lightCloud from '../../photos/LightCloud.png';
import lightRain from '../../photos/LightRain.png';
import shower from '../../photos/Shower.png';
import sleet from '../../photos/Sleet.png';
import snow from '../../photos/Snow.png';
import { dateConverter } from '../../utility/unitConverter';
import Avatar from '../Avatar';


const StatCard = ({ date, low, high, unit, dt,condition }) => {
    // date = dateConverter(dt)
    return (
        <div>
            <Card sx={{ minWidth: 110, maxWidth: 100, textAlign: 'center', color: 'white', backgroundColor: '#1E213A', padding: '0 rem' }}>
                <CardContent>
                    <Typography sx={{ fontSize: '.8rem' }} gutterBottom>
                        {dateConverter(dt)}
                    </Typography>
                    <div className='flow-05'>
                        {/* <img src={heavyRain} alt="weather icon" /> */}
                        <Avatar condition={condition}/>
                    </div>
                    <div className='flex gap-1 flex-just-cent' style={{ fontSize: '.75rem' }}>
                        <span>{high} °{unit}</span>
                        <span>{low} °{unit}</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )

}


export default StatCard
