window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const celsiusInput = document.getElementById("cInput");
   const fahrenheitInput = document.getElementById("fInput");

   document.querySelector("#convertButton").addEventListener("click", () => {

      // Check if Celcius input has a value
      if (celsiusInput.value !== "" && !isNaN(celsiusInput.value)) {
         const celsiusValue = parseFloat(celsiusInput.value);
         const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
         fahrenheitInput.value = fahrenheitValue///.toFixed(2); // Display Fahrenheit value in 2 decimal places
       }
   
       // Check if Fahrenheit input has a value
       if (fahrenheitInput.value !== "" && !isNaN(fahrenheitInput.value)) {
         const fahrenheitValue = parseFloat(fahrenheitInput.value);
         const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
         celsiusInput.value = celsiusValue//.toFixed(2); // Display Celsius value in 2 decimal places
       }

       if (isNaN(fahrenheitInput.value)){
            document.querySelector("#errorMessage").innerHTML = fahrenheitInput.value + " is not a number"
       }
       else if (isNaN(celsiusInput.value)){
         document.querySelector("#errorMessage").innerHTML = celsiusInput.value + " is not a number"
    }
    else {
      document.querySelector("#errorMessage").innerHTML = ""
    }

       if (fahrenheitInput.value < 32) {
         let img = document.querySelector("img").src = "cold.png"
       }
       else if (fahrenheitInput.value >= 32 && fahrenheitInput.value <= 50){
         let img = document.querySelector("img").src = "cool.png";
       }
       else {
         let img = document.querySelector("img").src = "warm.png";
       }
   })

   document.querySelector("#cInput").addEventListener("input", () => {
      fahrenheitInput.value="";
   })

   document.querySelector("#fInput").addEventListener("input", () => {
      celsiusInput.value="";
   })

   
}

function convertCtoF(degreesCelsius) {
   return degreesFahrenheit = degreesCelsius * 9/5 + 32
}

function convertFtoC(degreesFahrenheit) {
   return degreesCelsius = (degreesFahrenheit - 32) * 5/9
}
