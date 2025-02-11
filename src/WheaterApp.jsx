import React, { useState } from 'react';
import useClima from './hook/useClima';
import { difKelvin } from './hook/constantes';

export default function WheaterApp() {

    const [ciudad,setCiudad] = useState('');
    
    const {fetchClima,dataClima} = useClima(ciudad);

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(ciudad.length > 0) fetchClima()
    }

    const handleCambioCiudad = (event) => {
        setCiudad(event.target.value)
    }

  return (
    <div className='container'>
        <h1>Aplicación de Clima</h1>

        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={ciudad}
            onChange={handleCambioCiudad}
            />
            <button type='submit'>Buscar</button>
        </form>
        {
            dataClima && (
                <>
                    <h2>{dataClima.city.name}</h2>
                    <div className='dataWeather'>
                        <p><strong>Temperatura:</strong>{parseInt(dataClima.list[0].main.temp - difKelvin)}°C</p>
                        <p><strong>Condicion Meteorologica:</strong> {dataClima.list[1].weather[0].description}</p>
                    </div>
                    <img src={`https://openweathermap.org/img/wn/${dataClima.list[1].weather[0].icon}@2x.png`} alt="" />
                </>
            )
        }
      
    </div>
  )
}
