


var button = document.getElementById ("button")
button.addEventListener ("click", function(event){
    event.preventDefault()
    console.log ("City")
    var city = document.getElementById ("cityinput").value;
    var cities = JSON.parse(localStorage.getItem("cities"))
    cities.push(city)
    localStorage.setItem('cities', JSON.stringify(cities));
    saving(city)
    var pastcities = document.getElementById ("pastcities")
    cities.forEach(element => {
        pastcities.append(element)

        // create a button that has the text of "element"
        // add event listener to that button when clicked calls savng (function on 23)
        
        var newButton = document.createElement ('button');
        newButton.value = element;
        pastcities.append(newButton);
        newButton.addEventListener ("click", function(){
        saving(element);
     
        })
        
    });
    
    
    
})




function saving (city){
    fetch ("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + API_KEY).then(
    arsp => {
        (arsp.json()).then (
            data => {
                console.log (data);

                var temp = document.getElementById ("temperature");
                temp.textContent = (data.main.temp - 273.15).toFixed(0)+ " Temperature"

                var humidity = document.getElementById ("humidity")
                humidity.textContent = data.main.humidity + " Humidity"

                
                var windspeed = document.getElementById ("windspeed")
                windspeed.textContent = data.wind.speed + " Wind speed"


                fetch ("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=" + API_KEY).then(
                arsp => {
                    (arsp.json()).then (
                        data => {
                            console.log (data);

                            // temperature for 5 days
                      var forecast = document.getElementById ("temperature1")   
                      forecast.textContent = (data.list[1].main.temp - 273.15).toFixed(0)
                       
                      var forecast = document.getElementById ("temperature2")   
                      forecast.textContent = (data.list[7].main.temp - 273.15).toFixed(0)
                        
                      var forecast = document.getElementById ("temperature3")   
                      forecast.textContent = (data.list[15].main.temp - 273.15).toFixed(0)
                        
                      var forecast = document.getElementById ("temperature4")   
                      forecast.textContent = (data.list[25].main.temp - 273.15).toFixed(0)
                        
                      var forecast = document.getElementById ("temperature5")   
                      forecast.textContent = (data.list[34].main.temp - 273.15).toFixed(0)
                       
                    
                            // humidity for 5 days
                    
                    
                            var forecast = document.getElementById ("humidity1")   
                            forecast.textContent = data.list[1].main.humidity  
                    
                            var forecast = document.getElementById ("humidity2")  
                            forecast.textContent = data.list[7].main.humidity  
                    
                            var forecast = document.getElementById ("humidity3")   
                            forecast.textContent = data.list[15].main.humidity  

                            var forecast = document.getElementById ("humidity4")   
                            forecast.textContent = data.list[25].main.humidity 
                            
                            var forecast = document.getElementById ("humidity5")   
                            forecast.textContent = data.list[34].main.humidity  

                            // windspeed 5 days
                            var forecast = document.getElementById ("windspeed1")   
                            forecast.textContent = data.list[1].wind.speed 

                            var forecast = document.getElementById ("windspeed2")   
                            forecast.textContent = data.list[7].wind.speed  

                            var forecast = document.getElementById ("windspeed3")   
                            forecast.textContent = data.list[15].wind.speed

                            var forecast = document.getElementById ("windspeed4")   
                            forecast.textContent = data.list[25].wind.speed

                            var forecast = document.getElementById ("windspeed5")   
                            forecast.textContent = data.list[34].wind.speed 


                    
                    }
                    
                    
                    )}
                )
                
                
                fetch (`http://api.openweathermap.org/data/2.5/uvi/forecast?appid=${API_KEY}&lat=${data.coord.lat}&lon=${data.coord.lon}&cnt=0`).then(
                    arsp => {
                        (arsp.json()).then (
                            data => {console.log(data)
                                var uvindex = document.getElementById ("uvindex")
                                uvindex.textContent = data[0].value + " UV Index"
                                
                                var uvindex = document.getElementById ("uvindex1")   
                                uvindex.textContent = data[1].value 
                                var uvindex = document.getElementById ("uvindex2")  
                                uvindex.textContent = data[2].value 
                                var uvindex = document.getElementById ("uvindex3")  
                                uvindex.textContent = data[3].value 
                                var uvindex = document.getElementById ("uvindex4")  
                                uvindex.textContent = data[4].value 
                                var uvindex = document.getElementById ("uvindex5")  
                                uvindex.textContent = data[5].value 

                                if (data[0].value > 10) uvindex.classList.add("text-danger")
                                else if (data[0].value > 5) uvindex.classList.add("text-warning")
                                else uvindex.classList.add("text-success")

                                if (data[1].value > 10) uvindex.classList.add("text-danger")
                                else if (data[2].value > 5) uvindex.classList.add("text-warning")
                                else uvindex.classList.add("text-success")

                                if (data[2].value > 10) uvindex.classList.add("text-danger")
                                else if (data[2].value > 5) uvindex.classList.add("text-warning")
                                else uvindex.classList.add("text-success")

                                if (data[3].value > 10) uvindex.classList.add("text-danger")
                                else if (data[3].value > 5) uvindex.classList.add("text-warning")
                                else uvindex.classList.add("text-success")

                                if (data[4].value > 10) uvindex.classList.add("text-danger")
                                else if (data[4].value > 5) uvindex.classList.add("text-warning")
                                else uvindex.classList.add("text-success")

                                if (data[5].value > 10) uvindex.classList.add("text-danger")
                                else if (data[5].value > 5) uvindex.classList.add("text-warning")
                                else uvindex.classList.add("text-success")


            }
        )
    }
)
 

            }
        );
    }
    
)}

console.log ("mark")