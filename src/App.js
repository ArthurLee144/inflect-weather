import React from 'react';
import './App.css';
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "b339b4e4447d81c837ce85d200104d04";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    units: "metric",
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const units = this.state.units;
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=${units}`);
    const data = await api_call.json();

    if (city && country && data) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        error: "Please enter your location"
      });
    }
  }

  toggleUnits = () => {
    let currentUnits = this.state.units;
    let currentTemp = this.state.temperature;
    if (currentUnits === "metric" && this.state.temperature) {
      setTimeout(prevState => this.setState(prevState =>
        ({units: "imperial", temperature: Math.round((100*(currentTemp*(9/5)+32)))/100})
        )
      , 300)
    } else {
      setTimeout(prevState => this.setState(prevState =>
        ({units: "metric", temperature: Math.round((100*(currentTemp - 32) * (5/9)))/100})
        )
      , 300)
      }
  }

  render() {
    let units;
    if (this.state.units === "metric") {
      units = "Celsius";
    } else {
      units = "Fahrenheit";
    }
    return (
      <div className="home">
        <h1>Weather Genie</h1>
        <p>Enter your city and country to get the current temperature</p>
        <div className="form">
        <Form getWeather={this.getWeather} />
        </div>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          units={units}
          error={this.state.error}
          toggleUnits={this.toggleUnits}
        />
      </div>
    );
  }
};

export default App;
