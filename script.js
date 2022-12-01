//JS part
function submitted(tokan, city) {
    const loc = document.getElementById("locationinput").value;
    const token = "6WF454RRBGJT3RQH6EN64SYBX";

const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=us&key=${token}&contentType=json`;
    let weatherData;
    fetch(url)
        .then(data => { 
            if(document.getElementById('locationinput').value==" "){
                alert("Please enter location")
            }
            return data.json() }
        )

        .then(json => {
            console.log(json)
            weatherData = json;
          // Document Manipulating
            document.getElementById('emptyLocation').innerHTML = weatherData.resolvedAddress
            document.getElementById('emptylat').innerHTML = weatherData.latitude
            document.getElementById('emptyLong').innerHTML = weatherData.longitude

            document.getElementById('emptyTimezone').innerHTML = weatherData.timezone
            document.getElementById('emptyWindSpeed').innerHTML = weatherData.currentConditions.windspeed
            document.getElementById('emptyPressure').innerHTML = weatherData.currentConditions.pressure
            document.getElementById('emptyHumidity').innerHTML = weatherData.currentConditions.humidity

            document.getElementById('emptyWindDirection').innerHTML = weatherData.currentConditions.winddir
            document.getElementById('emptyUVIndex').innerHTML = weatherData.currentConditions.uvindex
            document.getElementById('emptyFeelsLike').innerHTML = weatherData.currentConditions.feelslike
        }
        )
        .catch(error => {
            alert("Failed to load Weather info")
            throw(error);
        })
   

}
//validation part
function submit(){
    const city = document.getElementById('locationinput').value; 
     const tokan = document.getElementById('accesstokan').value;

    checkforerror(city,tokan)
}
function checkforerror(location,access_key){
    
    if(location ==""){
        alert("Please Enter Location")
        console.log("enter valid inputs")
    }
    else if (access_key ==""){
        alert("Please Enter Access Key")
        console.log("enter valid inputs")
    }
    else{
        submitted(location,access_key);
    }
}

