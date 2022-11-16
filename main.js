let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result");

searchBtn.addEventListener("click" , function() {
    let countryName = countryInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true `;
    fetch(finalUrl).then((response)=> response.json()).then((data) =>{
        console.log(data[0])
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2 class="com">${data[0].name.common}</h2>
        <div class="data-wrapper" >
        <p>Capital : <span>${data[0].capital}</span></p>
        <p>Continents : <span>${data[0].continents}</span></p>
        <p>Languages : <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span></p>
        <p>Population : <span>${data[0].population}</span></p>
        <p>Currencies : <span>${Object.keys(data[0].currencies)}</span></p>

        </div>
        `
    })
 
})