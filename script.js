


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
                    temp.textContent = data.main.temp - 273.15
                }
            );
        }
        
    )

})

console.log ("mark")