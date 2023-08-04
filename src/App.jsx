
import './App.css'
import Avatar from './components/Avatar'
import Conditions from './components/Conditions'
import FullDate from './components/FullDate'
import Location from './components/Location'
import SearchButton from './components/SearchButton'
import Temp from './components/Temp'
import TopSection from './components/TopSection'
import MidSection from './components/midsection/MidSection'
import Weather from './components/midsection/Weather'
import Card from './components/midsection/WeatherCard'

function App() {

  return (
    <div className='app'>
      <TopSection>
        <SearchButton />
        <Avatar />
        <Temp />
        <Conditions />
        <FullDate />
        <Location />
      </TopSection>

      <MidSection>
        {/* <Card />
        <Card /> */}
        <Weather/>

      </MidSection>

    </div>
  )
}

export default App
