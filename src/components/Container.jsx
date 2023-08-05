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


//set True on any of the WeatherCards component props to select
//the type of card to display
//<humidity ={true}/> will create a humidity foces card component


const Container = () => {
    const [data, setData] = useState([])
    const [unit, setUnit] = ('C')
    const [city, setCity] = useState('Luton')

    const [currentTemp, setCurrentTemp] = useState(0)
    const [minTemp, setMinTemp] = useState(0)
    const [maxTemp, setMaxTemp] = useState(0)
    const [humidData, setHumidData] = useState(0)
    const [pressureData, setPressureData] = useState(0)
    const [visibData, setVisibData] = useState(0)
    const [windData, setWindData] = useState(0)
    const [condition, setCondition] = useState('')
    const [forecast, setForecast] = useState([])
    const [longitude, setLongitude] = useState()
    const [latitude, setLatitude] = useState()





    useEffect(() => {
        ////
        //id = cityid
        const api_key = '1aaf6c74c2a6dee53be44e2f12b30ea7'
        // const city = 'Moscow'
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
            .then(res => res.json())
            .then(res => {
                const latitude = res.coord.lat
                const longitude = res.coord.l
                setData(res)
                const loc = res?.main
                setCurrentTemp(unitConverter(loc?.temp, unit))
                setMinTemp(unitConverter(loc?.temp_min, unit))
                setMaxTemp(unitConverter(loc?.max_temp, unit))
                setHumidData(loc?.humidity)
                setPressureData(loc?.pressure)
                setVisibData(res?.visibility)
                setWindData(res?.wind?.speed.toFixed(0))
                setCondition(res?.weather[0]?.description)
                setLongitude(res?.coord?.lon)
                setLatitude(res?.coord?.lat)
                console.log('daily', res?.daily)
            })
            .then(res => console.log(data))
            .catch(error => console.error(error))


        // const city = 'Moscow'
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${api_key}`)
            .then(res => res.json())
            .then(res => {
                setForecast(res.daily)

            })
            .then(res => console.log('forecast', forecast))
            .catch(error => console.error(error))


    }, [city, unit, longitude, latitude])


    // useEffect(() => {
    //     ///
    //     //id = cityid
    //     const api_key = '1aaf6c74c2a6dee53be44e2f12b30ea7'

    //     // const city = 'Moscow'
    //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${api_key}`)
    //         .then(res => res.json() )
    //         .then(res =>{
    //             setForecast(res.daily)

    //         })
    //         .then(res => console.log('forecast',forecast))
    //         .catch(error => console.error(error))

    // }, [city,longitude,latitude])

    return (
        <div>
            <TopSection>
                <SearchButton />
                <Avatar />
                <Temp temp={currentTemp} unit={unit} />
                <Conditions condition={condition} />
                <FullDate dt={data.dt} />
                <Location city={city} />
            </TopSection>


            <MidSection>
                <MidArticle >
                    {

                        forecast && forecast.map((day, index) => (<StatCard key={index} low={unitConverter(day?.temp?.min, unit)} high={unitConverter(day?.temp?.max, unit)} unit={unit} dt={day?.dt} />))
                    }

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
