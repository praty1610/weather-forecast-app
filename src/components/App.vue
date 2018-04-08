<template>
  <div id="app">
    <header>
      <h1>Weather Forecast Application</h1>
    </header>
    <article>
      <router-view></router-view>
    </article>
  </div>
</template>

<script>
  export default {
    
  }
  </script>

<style>

header {
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  background-color: #00a6ff;
  height:60px;  
}

header h1 {
  color : #ffffff
}


footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #00a6ff;
  text-align: center;
  position: fixed
}

footer p {
  text-align:center;
  color : #ffffff
}

article {
  position: relative;
  top: 75px;
}

button {
  display: inline-block;
  width: 10%;
  height : 35px;
  padding: 6px 0px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #fff;
  background-color: #00a6ff;
  background-image: none;
  border: 1px solid #00a6ff;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;        
}


</style>
