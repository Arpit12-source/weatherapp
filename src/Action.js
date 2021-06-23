import axios from "axios";

export const Show="Show";

export const view =(city)=>{
    return dispatch=>{
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b978ecaac09bae0190732bae5299d3b`)
        .then(resp=>console.log(resp))
        .catch(err=>console.log(err))
    }
}