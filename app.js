import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            city : '',
            cities : []
        }
    }

    handleCityValue(e) {
        this.setState({
            city : e.target.value
        })
    }

    addCity(e) {
        let array = this.state.cities;
        array.push(this.state.city);
        this.setState({
            cities : array,
            city : ''
        })
    }

    getCityWeatherInfo(e) {
        let http = new XMLHttpRequest();
        let url = `https://crossorigin.me/http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=76af0f04ebb699fd0cfad01f76d43780`;
        http.onreadystatechange = function() {
            if(http.readyState === 4 && http.status === 200) {
                console.log('response', http.response);
            }
        }
        http.withCredentials = false;
        http.open('GET', url, true);
        http.send();
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.city} onChange={this.handleCityValue.bind(this)} />
                <input type='button' value='Add' onClick={this.addCity.bind(this)} /> 
                <ul>
                    {this.state.cities.map(function(ele,i) {
                        return <li key={i} onClick={this.getCityWeatherInfo.bind(this)}>{ele}</li> 
                    }.bind(this))}
                </ul>
            </div>
        )
    }
}

export default App