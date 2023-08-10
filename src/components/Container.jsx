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
import Search from "./midsection/Search"


//set True on any of the WeatherCards component props to select
//the type of card to display
//<humidity ={true}/> will create a humidity foces card component


const Container = () => {
    const [data, setData] = useState([])
    const [unit, setUnit] = useState('C')
    const [city, setCity] = useState('luton')

    const [currentTemp, setCurrentTemp] = useState(0)
    const [minTemp, setMinTemp] = useState(0)
    const [maxTemp, setMaxTemp] = useState(0)
    const [humidData, setHumidData] = useState(0)
    const [pressureData, setPressureData] = useState(0)
    const [visibData, setVisibData] = useState(0)
    const [windData, setWindData] = useState(0)
    const [windDirection, setWindDirection] = useState(0)
    const [condition, setCondition] = useState('')
    const [forecast, setForecast] = useState([])
    const [longitude, setLongitude] = useState(51.8787)
    const [latitude, setLatitude] = useState(0.4200)
    const [description, setDescription] = useState('')
    const [visible, setVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')




    const handleTopButtonClick = (e) => {
        e.preventDefault()
        const search = document.querySelector('.search')
        search.classList.add('reveal-search')
        // console.log('search===>', search)
        setVisible(true)

    }

    const handleCloseButton = (e) => {
        e.preventDefault()
        setVisible(false)

    }


    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }


    const handleSubmit = (e) => {
        if(inputValue ==='' || typeof inputValue !== 'string'){
            return
        }
        setCity(inputValue)
        setVisible(false)
        e.preventDefault()
    }














    useEffect(() => {

        const api_key = '1aaf6c74c2a6dee53be44e2f12b30ea7'

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
            .then(res => res.json())
            .then(res => {

                setData(res)
                const loc = res?.main
                setCurrentTemp(unitConverter(loc?.temp, unit))
                setMinTemp(unitConverter(loc?.temp_min, unit))
                setMaxTemp(unitConverter(loc?.max_temp, unit))
                setHumidData(loc?.humidity)
                setPressureData(loc?.pressure)
                setVisibData(res?.visibility)
                setWindData(res?.wind?.speed.toFixed(0))
                setWindDirection(res?.wind?.deg)
                setCondition(res?.weather[0]?.description)
                setLongitude(res?.coord?.lon)
                setLatitude((res?.coord?.lat))


            })
            .then(res => console.log(data))
            .catch(error => console.error(error))

        console.log('description', description)
        // const city = 'Moscow'
        // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${api_key}`)
        //     .then(res => res.json())
        //     .then(res => {
        //         setForecast(res.daily)

        //     })
        //     .then(res => console.log('forecast', forecast))
        //     .catch(error => console.error(error))


    }, [city, unit, longitude, latitude])


    useEffect(() => {
        ///
        //id = cityid
        const api_key = '1aaf6c74c2a6dee53be44e2f12b30ea7'

        // const city = 'Moscow'
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${api_key}`)
            .then(res => res.json())
            .then(res => {
                setForecast(res.daily)

            })
            .then(res => console.log('forecast', forecast))
            .catch(error => console.error(error))

    }, [longitude, latitude])

    return (
        <div>
            <TopSection>
                <Search visible={visible} onClick={(e) => handleCloseButton(e)} onChange={(e) => handleInputChange(e)} city={city} onSubmit={(e) => handleSubmit(e)} inputValue={inputValue} />
                <SearchButton onClick={(e) => handleTopButtonClick(e)} />
                <Avatar condition={condition} />
                <Temp temp={currentTemp} unit={unit} />
                <Conditions condition={condition} />
                <FullDate dt={data.dt} />
                <Location city={city} />
            </TopSection>


            <MidSection>
                <MidArticle >
                    {

                        forecast && forecast.map((day, index) => (<StatCard key={index} low={unitConverter(day?.temp?.min, unit)} high={unitConverter(day?.temp?.max, unit)} unit={unit} dt={day?.dt} condition={day?.weather[0]?.description} />))
                    }

                </MidArticle >

                <SectionHeader text={"Today's Hightlights"} />
                <WeatherCard windData={windData} wind={true} windDirection={windDirection} />
                <WeatherCard visibility={true} visibData={visibData} />
                <WeatherCard humidity={true} humidData={humidData} />
                <WeatherCard airPressure={true} pressureData={pressureData} />
            </MidSection >

        </div >
    )
}

export default Container
