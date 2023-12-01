gsap.to("#input", {opacity: 2, delay: 1, duration: 2, repeat: 2})

const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "097b2a7e3bd5a804d3aa275cac2cf0b1"
}
//console.log(api)
const input = document.querySelector("#input")
input.addEventListener("keydown", enter)
//in dem Moment, in dem wir auf Enter klicken, beginnt die Suche (erst dann).
//Dabei brauchen wir den Zugang zu dem, was der Nutzer schreibt.
function enter(e){
    if (e.keyCode===13){
        getInfo(input.value)
    }
}
async function getInfo(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appid=${api.key}`)
    const resultReceived = await res.json()
    console.log(res)
    console.log(resultReceived)
    /*console.log(resultReceived.main.temp)
    console.log(resultReceived.main.temp_min)
    console.log(resultReceived.sys.country)
    console.log(resultReceived.weather[0].description)*/
    displayResult(resultReceived)
}
function displayResult(resultReceived){
    let city = document.querySelector("#city");
    city.textContent = `${resultReceived.name}, ${resultReceived.sys.country}`;
    getOurDate()
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(resultReceived.main.temp)}<span>°</span>`;
    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = "Feels like: " + `${Math.round(resultReceived.main.feels_like)}` + "°";
    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${resultReceived.weather[0].description}`;
    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min: " + `${Math.round(resultReceived.main.temp_min)}<span>°</span>` +" "+ "Max: " + `${Math.round(resultReceived.main.temp_max)}<span>°</span>`;
    console.log(resultReceived)
}
function getOurDate(){
    const myDate = new Date;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = days[myDate.getDay()];
    console.log(day)
    let todayDate =  myDate.getDate(); 
    console.log(todayDate)
    let month = months[myDate.getMonth()];
    console.log(month)
    let year =  myDate.getFullYear(); 
    console.log(year)  
    //let dayAllParts = document.querySelector("#date").innerHTML = day +" "+ todayDate +" "+ month +" "+ year;
    let dayAllParts = document.querySelector("#date");
    dayAllParts.innerHTML = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}` 
}

/*getOurDate()
function getOurDate(){
const myDate = new Date;
let date = document.querySelector("#date");
date.textContent = myDate
}*/

/*const d = new Date;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];*/

/*const myDate = new Date; 
let day = document.querySelector("#date").innerHTML = myDate.getDay()
console.log(day)*/

//const myDate = new Date;
/*const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day= document.querySelector("#date").innerHTML = days[myDate.getDay()];
console.log(day)*/

    //d.getFullYear()

/*const myDate = new Date;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = document.querySelector("#date").innerHTML =  months[myDate.getMonth()]
console.log(month)*/

/*const myDate = new Date;
let todayDate = document.querySelector("#date").innerHTML = myDate.getDate();   
console.log(todayDate)*/

/*const myDate = new Date;
let year = document.querySelector("#date").innerHTML = myDate.getFullYear();   
console.log(year)*/