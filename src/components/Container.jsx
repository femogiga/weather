import { useEffect, useState } from "react"
import Avatar from "./Avatar"
import Conditions from "./Conditions"
import FullDate from "./FullDate"
import Location from "./Location"
import SearchButton from "./SearchButton"
import Temp from "./Temp"
import TopSection from "./TopSection"
import MidArticle from "./midsection/MidArticle"
import MidSection from "./midsection/MidSection"
import SectionHeader from "./midsection/SectionHeader"
import StatCard from "./midsection/StatCard"
import WeatherCard from "./midsection/WeatherCard"
import { unitConverter } from "../utility/unitConverter"





const Container = () => {
    const [data, setData] = useState([])
    const [unit, setUnit] = ('F')
    useEffect(() => {
        ///
        //id = cityid
        const api_key = '1aaf6c74c2a6dee53be44e2f12b30ea7'
        const city = 'Luton'
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
            .then(res => res.json())
            .then(res => setData(res))
            .then(res => console.log(data))
            .catch(error => console.error(error))

    }, [])
    ////console.log(data.main)
    const loc = { ...data.main }
    const currentTemp = unitConverter(loc.temp, unit)
    const minTemp = unitConverter(loc.temp_min, unit)
    const maxTemp = unitConverter(loc.max_temp, unit)
    const humidData = loc.humidity
    const pressureData = loc.pressure
    const visibData = data.visibility
    const windData = data.wind.speed.toFixed(0)
    return (
        <div>
            <TopSection>
                <SearchButton />
                <Avatar />
                <Temp temp={currentTemp} unit={unit} />
                <Conditions />
                <FullDate />
                <Location />
            </TopSection>


            <MidSection>
                <MidArticle >
                    <StatCard />
                    <StatCard />
                    <StatCard />
                    <StatCard />
                    <StatCard />
                </MidArticle >

                <SectionHeader text={"Today's Hightlights"} />
                <WeatherCard windData={windData} />
                <WeatherCard visibility={true} visibData={visibData} />
                <WeatherCard humidity={true} humidData={humidData} />
                <WeatherCard airPressure={true} pressureData={pressureData} />
            </MidSection >

        </div >
    )
}

export default Container
