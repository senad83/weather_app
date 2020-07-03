


var button = document.getElementById ("button")
button.addEventListener ("click", function(event){
    event.preventDefault()
    console.log ("City")
    var city = document.getElementById ("cityinput").value;
    fetch ("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + API_KEY).then(
        arsp => {
            (arsp.json()).then (
                data => {
                    console.log (data);

                    var temp = document.getElementById ("temperature");
                    temp.textContent = (data.main.temp - 273.15)+ " Temperature"

                    var humidity = document.getElementById ("humidity")
                    humidity.textContent = data.main.humidity + " Humidity"

                    
                    var windspeed = document.getElementById ("windspeed")
                    windspeed.textContent = data.wind.speed + " Wind speed"
                    
                    
                    fetch (`http://api.openweathermap.org/data/2.5/uvi/forecast?appid=${API_KEY}&lat=${data.coord.lat}&lon=${data.coord.lon}&cnt=0`).then(
                        arsp => {
                            (arsp.json()).then (
                                data => {
                                    var uvindex = document.getElementById ("uvindex")
                                    uvindex.textContent = data[0].value + " UV Index"
                                    if (data[0].value > 10) uvindex.classList.add("text-danger")
                                    else if (data[0].value > 5) uvindex.classList.add("text-warning")
                                    else uvindex.classList.add("text-success")
                }
            )
        }
    )

                }
            );
        }
        
    )

})

console.log ("mark")