
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import NearMeIcon from '@mui/icons-material/NearMe';
const WeatherCard = () => {

  //guage regilates wether meter has guage or not

  let gauge = true
  return (
    <div>

      <Card sx={{ minWidth: 280, maxWidth: 350, textAlign: 'center', color: 'white', backgroundColor: '#1E213A', padding: '0 rem' }}>
        <CardContent>
          <Typography sx={{ fontSize: '1rem' }} gutterBottom>
            {gauge ? 'Wind status' : 'Humidity'}
          </Typography>

          <Typography sx={{ mb: 1.5 }}>
            <span className='stat'>7</span><span> mph</span>
          </Typography>


          {gauge ? <Typography sx={{ mb: 1.5, display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <span className='direction'><NearMeIcon /></span><span> wsw</span>
          </Typography> :
            <div className='flex flex-col flex-align-center'>
              <div className='percent flex gap'><span>0</span> <span>50</span><span>100</span></div>
              <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">at 50/100</meter>
            </div>

          }

        </CardContent>

      </Card>




    </div>
  )
}


export default WeatherCard
