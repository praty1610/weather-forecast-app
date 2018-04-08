<template>
    <div>
        <div ref='graph'></div>
    </div>
</template>

<script>
    import Highcharts from 'highcharts'; 
    export default {
        props: {
            weatherData : {
                type : Object,
                required : true
            }
        },
        data() {
            return {
                chartData : []
            }
        },
        created() {
            this.weatherData.list.map((listData) => {
                let data = {};
                data['x'] = new Date(listData.dt_txt);  
                data['y'] = listData.main.temp;
                this.chartData.push(data);              
            })
        },
        mounted() {
            var options = {
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Weather Forecast'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },    
                series: [{
                    name: 'Temperatures',
                    data: this.chartData
                }]   
            };
            this.chart = new Highcharts["Chart"](
                this.$refs.graph,
                options
            );
        }
    }
</script>