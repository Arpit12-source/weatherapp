import React, { Component } from 'react';
import axios from "axios";
import "./Chat.css";
import Clouds from "./Clouds";

class Chat extends Component {
    state = {
        city: "Mumbai",
        name: "",
        main: {},
        coord: {},
        weather: {},
        sys: {},
        wind: {}

    }
    componentDidMount() {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=` + this.state.city + `&units=metric&appid=8b978ecaac09bae0190732bae5299d3b`
        axios.get(url)
            .then(resp => {
                console.log(resp)
                this.setState({
                    name: resp.data.name,
                    main: resp.data.main,
                    weather: resp.data.weather[0].main,
                    wind: resp.data.wind,
                    sys: resp.data.sys,
                    coord: resp.data.coord

                })
            })
            .catch(err => console.log(err))
    }

    changeHandler = (event) => {
        const search = event.target.value
        this.setState({ city: search })


    }
    submitHandler = (event) => {
        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?q=` + this.state.city + `&units=metric&appid=8b978ecaac09bae0190732bae5299d3b`
        axios.get(url)
            .then(resp => {
                console.log(resp.data.weather[0].main)
                this.setState({
                    name: resp.data.name,
                    main: resp.data.main,
                    weather:resp.data.weather[0].main,
                    wind: resp.data.wind,
                    sys: resp.data.sys,
                    coord: resp.data.coord

                })
            })
            .catch(err => console.log(err))

        this.setState({
            city:""
        })

    }
    farHandler=(event)=>{
        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?q=` + this.state.city + `&units=imperial&appid=8b978ecaac09bae0190732bae5299d3b`
        axios.get(url)
            .then(resp => {
                console.log(resp.data.weather[0].main)
                this.setState({
                    name: resp.data.name,
                    main: resp.data.main,
                    weather: resp.data.weather[0].main,
                    wind: resp.data.wind,
                    sys: resp.data.sys,
                    coord: resp.data.coord

                })
            })
            .catch(err => console.log(err))

        this.setState({
            city:""
        })
    }
    render() {

        console.log(this.state.weather)
        return (
            <div className="climate" >
                <form className="climate__form" >
                    <input placeholder="Enter city name" value={this.state.city} className="climate__input" onChange={(event) => {
                        this.setState({ city: event.target.value })
                    }} />
                    <button  onClick={this.submitHandler} className="climate__button">Celcius</button>
                    <button onClick={this.farHandler} className="climate__button">Farehite</button>
                </form>
                <Clouds cloudtype="sunny"/>
                <h1>{this.state.name}</h1>
                <p> Country : {this.state.sys.country} || latitude:{this.state.coord.lat} ||  longitude:{this.state.coord.lon}</p>
                <div className="climate__cards">
                    <div className="climate__temp">
                        <h3>TEMP : {this.state.main.temp}</h3>
                        <div>
                            <h5>Temp Max: {this.state.main.temp_max} || Temp Min: {this.state.main.temp_min} || Feelslike: {this.state.main.feels_like} || Humidity:  {this.state.main.humidity} || Pressure:  {this.state.main.pressure}</h5>

                        </div>


                    </div>
                    <div className="climate__temp">

                        <h4>Sunrise: {this.state.sys.sunrise} || Sunset: {this.state.sys.sunset}</h4>
                    </div>
                    <div className="climate__temp">

                        <h4>Wind Speed: {this.state.wind.speed} || Wind Angle: {this.state.wind.deg}</h4>
                    </div>
                    <div className="climate__temp">

                    
                    </div>
                </div>
              
                
            </div>
        )
    }
}

export default Chat;
