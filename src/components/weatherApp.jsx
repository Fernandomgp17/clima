import { useEffect, useState } from "react";
import { WeatherForm } from "./weatherForm";
import { WeatherMainInfo } from "./weatherMainInfo";
import styles from '../style/weatherApp.module.css'

const {VITE_REACT_APP_KEY,VITE_REACT_APP_URL} = import.meta.env;


const WeatherApp = () => {

  const [weather, setWeather] = useState(null);

  useEffect(()=>{
    loadInfo();
  },[]);

  useEffect(()=>{
    document.title=`Weather | ${weather?.location.name??''}`
  },[weather])

  const loadInfo = async (city='london') => {

      const request = await fetch(`${VITE_REACT_APP_URL}&key=${VITE_REACT_APP_KEY}&q=${city}&aqi=no`)
      .then(response => response.json())

      setWeather(request)
    
  }

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  }

  return(
    <div className={styles.weatherContainer} >
      <WeatherForm onChangeCity={handleChangeCity}/>
      <WeatherMainInfo weather={weather}/>
    </div>
  )
}

export {WeatherApp};