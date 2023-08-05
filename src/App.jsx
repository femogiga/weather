
import './App.css'
import Avatar from './components/Avatar'
import Conditions from './components/Conditions'
import Container from './components/Container'
import FullDate from './components/FullDate'
import Location from './components/Location'
import SearchButton from './components/SearchButton'
import Temp from './components/Temp'
import TopSection from './components/TopSection'
import MidArticle from './components/midsection/MidArticle'
import MidSection from './components/midsection/MidSection'
import SectionHeader from './components/midsection/SectionHeader'
import StatCard from './components/midsection/StatCard'
import WeatherCard from './components/midsection/WeatherCard'
import Card from './components/midsection/WeatherCard'

function App() {

  return (
    <div className='app'>
      {/* <TopSection>
        <SearchButton />
        <Avatar />
        <Temp />
        <Conditions />
        <FullDate />
        <Location />
      </TopSection>

      <MidSection>
        <MidArticle>
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
        </MidArticle>

        <SectionHeader text={"Today's Hightlights"} />
        <WeatherCard />
        <WeatherCard visibility={true} />
        <WeatherCard humidity={true} />
        <WeatherCard airPressure={true} />
      </MidSection> */}
      <Container/>

    </div>
  )
}

export default App
