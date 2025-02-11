import { useState } from "react";
import {urlBase,API_KEY} from './constantes'

export default function useClima(ciudad) {

    const [dataClima, setDataClima] = useState(null);
    
    const fetchClima = async () => {
        try{
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
            const data = await response.json();
            setDataClima(data)
        }catch(error){
            console.log(error)
        }
    }


  return {
    fetchClima,
    dataClima
  }
}
