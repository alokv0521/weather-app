const api_key=`7025dd477a4c71a8b2b8052cc22c3156`;

fetch("https://api.openweathermap.org/data/2.5/weather?lat=22.5726&lon=88.3639&appid=7025dd477a4c71a8b2b8052cc22c3156")
.then((data)=>data.json() )
.then((jsonData)=>{
    // console.log(jsonData)
    console.log(jsonData)
    console.log(jsonData.name)
    console.log(jsonData.main.temp)
    console.log(jsonData.main.feels_like)
    console.log(jsonData.main.temp_min)
    console.log(jsonData.main.temp_max)

    document.getElementById("location").innerHTML=jsonData.name;
    document.getElementsByClassName("temp").innerHTML=jsonData.main.temp;

    
})



