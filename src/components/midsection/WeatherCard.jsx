
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import NearMeIcon from '@mui/icons-material/NearMe';




const WeatherCard = ({ wind, visibility, airPressure, humidity }) => {


  // set <Card wind={true}/> to choose type of card
  // wind = true
  // visibility = true
  // airPressure = true
  // humidity = false;
  let text = 'Air pressure'
  let unit = ''

  if (humidity) {
    text = 'Humidity'
    unit = '%'
    visibility = airPressure = wind = false

  }
  else if (airPressure) {
    text = 'Air pressure'
    unit = 'mb'
    visibility = wind = humidity = false
  }
  else if (visibility) {
    text = 'Visibility'
    unit = 'miles'
    wind = airPressure = humidity = false
  }
  else {
    text = 'Wind status'
    unit = 'mph'
    visibility = airPressure = humidity = false
  }
  return (
    <div>

      <Card sx={{ minWidth: 280, maxWidth: 350, textAlign: 'center', color: 'white', backgroundColor: '#1E213A', padding: '0 rem' }}>
        <CardContent>
          <Typography sx={{ fontSize: '1rem' }} gutterBottom>
            {text}
          </Typography>

          <Typography sx={{ mb: 1.5 }}>
            <span className='stat'>7</span><span>{unit}</span>
          </Typography>



          <>
            {
              wind && <Typography sx={{ mb: 1.5, display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <span className='direction'><NearMeIcon /></span><span> wsw</span>
              </Typography>
            }

            {humidity && <div className='flex flex-col flex-align-center'>
              <div className='percent flex gap'><span>0</span> <span>50</span><span>100</span></div>
              <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">at 50/100</meter>
            </div>
            }
          </>


        </CardContent>

      </Card>




    </div>
  )
}


export default WeatherCard
