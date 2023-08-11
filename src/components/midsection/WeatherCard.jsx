
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import NearMeIcon from '@mui/icons-material/NearMe';
import { distanceConverter } from '../../utility/unitConverter';
import { windCompass } from '../../utility/windCompass';
import NavigationIcon from '@mui/icons-material/Navigation';







const WeatherCard = ({ wind, visibility, airPressure, humidity, visibData, humidData, pressureData, windData, windDirection }) => {


  //rotateValue is used to set the direction of compass
  const rotateValue = windDirection- 90
  const styled = {
    transformOrigin:'center center',
    transform: `rotate(${rotateValue}deg)`

  }
  const unitStyle = {
      fontSize:'2rem'
  }
  console.log('windData', windData)


  // set <Card wind={true}/> to choose type of card
  // wind = true //
  // visibility = true
  // airPressure = true
  // humidity = false;
  let text = 'Air pressure'
  let unit = ''
  let data = 0

  if (humidity) {
    text = 'Humidity'
    unit = '%'
    data = humidData
    visibility = airPressure = wind = false

  }
  else if (airPressure) {
    text = 'Air pressure'
    unit = 'mb'
    data = pressureData
    visibility = wind = humidity = false
  }
  else if (visibility) {
    text = 'Visibility'
    unit = 'miles'
    data = distanceConverter(visibData)
    wind = airPressure = humidity = false
  }
  else {
    text = 'Wind status'
    unit = 'mph'
    data = windData
    visibility = airPressure = humidity = false
  }
  return (
    <div className='big-card'>

      <Card sx={{ minWidth: 280, maxWidth: 350, textAlign: 'center', color: 'white', backgroundColor: '#1E213A', padding: '0 rem' }}>
        <CardContent>
          <Typography sx={{ fontSize: '1rem' }} gutterBottom>
            {text}
          </Typography>

          <Typography sx={{ mb: 1.5 }}>
            <span className='stat'>{data}</span><span style={unitStyle}>{unit}</span>
          </Typography>



          <>
            {
              wind && <Typography sx={{ mb: 1.5, display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <span className='direction' style={styled}><NavigationIcon/></span><span>{windCompass(windDirection)}</span>
              </Typography>
            }

            {humidity && <div className='flex flex-col flex-align-center'>
              <div className='percent flex gap'><span>0</span> <span>50</span><span>100</span></div>
              <meter id="humidity" min="0" max="100" low="33" high="80" optimum="55" value={data}>at 50/100</meter>
            </div>
            }
          </>


        </CardContent>

      </Card>




    </div>
  )
}


export default WeatherCard
