import { useState } from "react";

const WeatherForm = ({onChangeCity}) => {
  const [city,setCity] = useState('');

  const handleChange = (event) => {
    if(event.target.value !== ''){
      setCity(event.target.value);
    }else{
      setCity('london')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onChangeCity(city || 'london');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
    </form>
  )
}

export {WeatherForm};