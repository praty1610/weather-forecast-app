<template>
    <div>
        <ul>    
            <li v-for='data in weatherData.list'>
                <p>{{ data.dt_txt }}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Temperature</td>
                            <td>{{ data.main.temp }} &degC</td>
                        </tr>
                        <tr>
                            <td>Min</td>
                            <td>{{ data.main.temp_min }} &degC</td>
                        </tr>
                        <tr>
                            <td>Max</td>
                            <td>{{ data.main.temp_max }} &degC</td>
                        </tr>
                        <tr>
                            <td>Wind</td>
                            <td>{{ data.wind.speed }} m/s</td>
                        </tr>
                        <tr>
                            <td>Cloudiness</td>
                            <td>{{ data.weather[0].description }}</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{{ data.main.pressure }} hpa</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{{ data.main.humidity }} %</td>
                        </tr>
                        
                        <tr>
                            <td>Geo coords</td>
                            <td>[{{ weatherData.city.coord.lat }}, {{ weatherData.city.coord.lon }}]</td>
                        </tr>                      
                    </tbody>
                </table>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props : {
            weatherData : {
                type : Object,
                required : true
            }
        },
        data() {
            return {
                
            }
        }       
    }
</script>

<style scoped>
    table {
        font: 400 14px/1.4 Roboto,Arial,sans-serif;
    }

    table tr {
        background-color: #f9f9f9;
    }
    table tr td {
        text-align: left;
        padding: 5px;
        border: 1px solid #ddd;
    }
    ul {
        display:inline-block
    }
    li {
        list-style-type:none;
        display: inline-block;
        padding : 21px
    }
</style>