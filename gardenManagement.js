const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;


//Using if-else statement to check temperature
if (temperature > 80){
    console.log("Watering on")
}else{
    console.log("Watering off")
}


//Using if-else statement to check time of Day
if (timeOfDay === "evening" || timeOfDay === "night"){
    console.log("Lights on")
}else{
    console.log("Lights off")
}

//Using while loop to increment the value of soil moisture

while (soilMoisture < 40){
     soilMoisture += 5
     console.log(soilMoisture)
}

