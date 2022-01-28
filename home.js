const cars = ["Saab", "Volvo", "BMW","ford","izuzu","rental","mercden","aduio","bently","chervolet","fiat","dogge","honda","jeep","kia"];
const display = document.getElementById("display");

for (let i =0; i <cars.length; i ++ ) {
    display.innerHTML += "<ol>" + cars[i] + "</ol>";

}