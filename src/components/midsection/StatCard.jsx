
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


const StatCard = (date) => {
    date = 'Tomorrow'
    return (
        <div>
            <Card sx={{ minWidth: 110, maxWidth: 100, textAlign: 'center', color: 'white', backgroundColor: '#1E213A', padding: '0 rem' }}>
                <CardContent>
                    <Typography sx={{ fontSize: '1rem' }} gutterBottom>
                        {date}
                    </Typography>
                    <div className='flow-05'>
                        <img src={heavyRain} alt="weather icon" />
                    </div>
                    <div className='flex gap-1 flex-just-cent' style={{ fontSize: '.75rem' }}>
                        <span>16°C</span>
                        <span>16°C</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )

}


export default StatCard
