<template>
    <div>
        <div class='add-city'>
            <input type='text' v-model='cityName' placeholder='ENTER CITY TO BE ADDED'/>
            <button v-on:click='addCity(cityName)'>ADD</button>
        </div>
        <table>          
            <tr v-for='(city, index) in cities'>
                <td>{{ city }}</td>
                <td><router-link v-bind:to='"/cities/"+city'>Weather Report</router-link></td>
                <td><span v-on:click='deleteCity(index)' class='deleteIcon'>x</span></td>                               
            </tr>
        </table>        
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        data() {
            return {
                cityName : ''
            }
        },
        methods : {
            ...mapActions(['deleteCity']),
            addCity: function() {
                if(this.cityName !== '') {
                    this.$store.dispatch('addCity', this.cityName);
                    this.cityName = ''
                }
            }
        },
        computed : {
            ...mapGetters(['cities'])
        }  
    }
</script>

<style scoped>
    .deleteIcon {
        color: white;
        background-color: red;
        padding-left: 1px;
        border-radius: 5px;
        border: 1px solid red;
        cursor: pointer
    }

    .add-city input {
        display: inline-block;
        width: 89%;
        height : 20px;
        padding: 6px 0px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;        
    }

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        margin: 20px auto
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    
</style>