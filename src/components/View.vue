<template>
    <div>
        <select v-model='cityName' v-on:change="changeRoute">
            <option v-for='city in cities' v-bind:value="city">{{ city }}</option>
        </select>
        <router-link to='/cities'>List</router-link>
        <div v-if='Object.keys(weatherReport).length>0'>
            <h2>Weather in <span class='transformText'>{{ cityName }}</span></h2>
            <button v-on:click='changeButtonValue'>
            {{ showGraph }}
            </button>
            <viewDetailedReport v-bind:weatherData='weatherReport' v-if="showGraph === 'Graph'"></viewDetailedReport>
            <viewGraph v-else v-bind:weatherData='weatherReport'></viewGraph>
        </div>
        <h1 v-else class='errClass'>Invalid City</h1>
       
    </div>
</template>

<script>
    import { callApi } from '../utilis/callApi';
    import ViewDetailedReport from './ViewDetailedReport.vue';
    import ViewGraph from './ViewGraph.vue';
    import { mapGetters } from 'vuex';
    export default {
        components : {
            viewDetailedReport : ViewDetailedReport,
            viewGraph : ViewGraph
        },
        data() {
            return {
                weatherReport : {},
                cityName : this.$route.params.city,
                showGraph : 'Graph'
            }
        },
        methods : {
            changeButtonValue() {
                this.showGraph = this.showGraph === 'Detailed Report'?'Graph':'Detailed Report'
            },
            changeRoute() {
                this.$router.push({path:'/cities/' + this.cityName });
                this.showGraph = 'Graph';
                callApi(this.cityName, 'get', null, (response) => {
                    if(response.cod === '404') {
                        this.weatherReport = {};
                    } else {
                        this.weatherReport = response
                    }
                })  
            }
        },
        created() {
            callApi(this.cityName, 'get', null, (response) => {
                if(response.cod === '404') {
                    this.weatherReport = {};
                } else {
                    this.weatherReport = response
                }
            })            
        },
        computed : {
            ...mapGetters(['cities'])
        }
    }
</script>

<style scoped>
    .transformText {
        text-transform : uppercase
    }
    .errClass {
        text-align : center
    }
    select {
        float : right;
        height : 30px;
        width : 200px
    }
</style>