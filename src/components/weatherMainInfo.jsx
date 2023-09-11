const WeatherMainInfo = ({weather}) => {
  return(
    <div>
      <div>
        {weather?.location.name}
      </div>
      <div>
        {weather?.location.country}
      </div>
      <div>
        <div>
          <img 
          src={`http:${weather?.current.condition.icon}`} 
          alt={weather?.current.condition.text} />
        </div>
        <div>
          <div>
            {weather?.current.condition.text}
          </div>
          <div>
            {weather?.current.temp_c}°
          </div>
        </div>
      </div>
      <iframe 
      title="mapa"
      src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52493.66158898935!2d${weather?.location.lon}!3d${weather?.location.lat}2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1694408178842!5m2!1ses-419!2spe`} 
      width="600" 
      height="450" 
      style={{border:0}} 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export {WeatherMainInfo};