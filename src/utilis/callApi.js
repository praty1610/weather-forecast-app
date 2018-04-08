export const callApi = function(endpoint, method = 'get', data, cb) {
    var http = new XMLHttpRequest();
    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${endpoint}&units=metric&appid=76af0f04ebb699fd0cfad01f76d43780`;
    
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            cb(JSON.parse(this.response));
        }
    };
    http.open(method, url, true);
    http.send()
}