import { useState } from "react";
import { WeatherForm } from "./weatherForm";
const {VITE_REACT_APP_KEY,VITE_REACT_APP_URL} = import.meta.env;

const WeatherApp = () => {

  const [weather, setWeather] = useState(null);

  const loadInfo = async (city) => {

      const request = await fetch(`${VITE_REACT_APP_URL}&key=${VITE_REACT_APP_KEY}&q=${city}&aqi=no`)
      .then(response => response.json())
      
      console.log(request)
    
  }

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  }

  return(
    <div>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <div>
        Info
      </div>
    </div>
  )
}

export {WeatherApp};