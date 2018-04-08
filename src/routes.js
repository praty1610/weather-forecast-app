import List from './components/List.vue';
import View from './components/View.vue';

export default [
    {path : '/', redirect: '/cities'},
    {path : '/cities', component : List},
    {path : '/cities/:city' , component : View}
]