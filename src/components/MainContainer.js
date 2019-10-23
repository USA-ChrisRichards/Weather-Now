import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// const cityName = "";
// const weatherApi = `api.openweathermap.org/data/2.5/weather?q=${cityName}`;
// const api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${APIKEY}`;
const APIKEY = "";
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wind: "",
      cityName: false,
      list: "",
      weather: "",
      searchTerm: ""
    };
  }

  componentDidMount() {
    // this.fetchCity();
  }

  fetchCity = city => {
    console.log(city);
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&APPID=${APIKEY}`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          wind: data.list[0].wind.speed,
          cityName: data.city.name,
          list: data.list[0].main,
          weather: data.list[0].weather[0].main
        })
      );
  };

  //pass to Navbar
  handleSearch = (event, city) => {
    event.preventDefault();
    this.fetchCity(city);
  };

  //vvv make this its own component vvv
  renderWeather = () => {
    const temp = Math.round(this.state.list.temp);
    const wind = Math.round(this.state.wind);
    if (this.state.cityName) {
      return (
        <div className="weather-container">
          <h2>{this.state.cityName}</h2>
          <h3>Temperature: {temp}°F</h3>
          <h3>{this.state.weather}</h3>
          <h3>Wind: {wind}/mph</h3>
          <h3>Humidity: {this.state.list.humidity}%</h3>
        </div>
      );
    } else {
      console.log("Search for a city");
    }
  };

  render() {
    console.log("state.all:", this.state.wind);

    return (
      <div className="main-container">
        <Navbar handleSearch={this.handleSearch} fetchCity={this.fetchCity} />
        {this.renderWeather()}
        <div className="stuff">
          <p>
            Welcome to Weather Now! Type the name of your city in above to see
            weather information.
          </p>
        </div>

        <Footer />
      </div>
    );
  }
}

export default MainContainer;

//background of main container shows image of city?
//depending on weather(temp/rain/fog etc.) have image overtop city with gradient
//logic for conditionally render city's image
//  OR...
// show an image for each weather condition(rain, sunny, cloudy, day, night, hot/cold image)
// APIKEY needs to be on back end, or at least in .env file and in .gitignore

// error handling on searches ()
// autofill for search bar of available cities?
