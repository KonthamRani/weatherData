function showLatLong() {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success);
    }

    function success(position) {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude)
        document.getElementById('lat').innerText+=latitude
        document.getElementById('long').innerText+=longitude
        showTableData(latitude,longitude);
    }
    
}
async function showTableData(lat,long){
    
    try{
        let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=41f0381fedd924492178a2ae8c53edfd`
        console.log(url)
        let data=await fetch(url)
        let response=await data.json();
        console.log(response);
        document.getElementById("tableBody").innerHTML=`
        <p>Location: ${response.name}</p>
        <div class="latlong">
            <p>Lat: ${response.coord.lat}</p>
            <p>Long: ${response.coord.lon}</p>
        </div>
        <p>TimeZone :</p>
        <p>Wndo Speed:</p>
        <p>Pressure :</p>
        <p>Humidity :</p>
        <p>Wind Direction :</p>
        <p>UV Index :</p>
        <p>Feels Like :</p>`
    }
catch(err){
    alert("Unable to fetch data")
}
   

}
document.getElementById("fetch-data").addEventListener('click', showLatLong);
