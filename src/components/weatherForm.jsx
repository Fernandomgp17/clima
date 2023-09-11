import { useState } from "react";
import styles from '../style/weatherForm.module.css';

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
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="text" onChange={handleChange} className={styles.input} />
    </form>
  )
}

export {WeatherForm};