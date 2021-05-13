import { App } from './app';
import './main.scss';

let citiesInfo = [] as any [];

document.getElementById("addCityButton").addEventListener("click", () => {
    let cityName = (document.getElementById("inputCityButton") as HTMLInputElement).value;
    const app = new App(cityName);

    app.getWeather(cityName).then(data => {

        const containerElement = document.createElement("div");
        containerElement.className = "weatherContainer";
        const nameElement = document.createElement("p");
        nameElement.innerHTML = data.name;

        const pressureElement = document.createElement("p");
        pressureElement.innerHTML = data.main.pressure +" hPa";

        const tempElement = document.createElement("p");
        tempElement.innerHTML = data.main.temp+" °C";
        
        const cloudElement = document.createElement("p");
        cloudElement.innerHTML = data['weather'][0]['main'];

        // pressureelement.className = "classname";
        containerElement.appendChild(nameElement);
        containerElement.appendChild(pressureElement);
        containerElement.appendChild(tempElement);
        containerElement.appendChild(cloudElement);
        document.getElementsByClassName("flexContainer")[0].appendChild(containerElement);
        citiesInfo.push(data);
        app.saveData(citiesInfo);
    });

    // localStorage.removeItem("weatherData");
});

(function (){

    citiesInfo = JSON.parse(localStorage.getItem('weatherData'));
    console.log(citiesInfo);
    citiesInfo.forEach((element, index) => {

        const containerElement = document.createElement("div");
        containerElement.className = "weatherContainer";
        const nameElement = document.createElement("p");
        nameElement.innerHTML = citiesInfo[index].name;

        const pressureElement = document.createElement("p");
        pressureElement.innerHTML = citiesInfo[index].main.pressure +" hPa";

        const tempElement = document.createElement("p");
        tempElement.innerHTML = citiesInfo[index].main.temp + " °C";
        
        const cloudElement = document.createElement("p");
        cloudElement.innerHTML = citiesInfo[index]['weather'][0]['main'];

        // pressureelement.className = "classname";
        containerElement.appendChild(nameElement);
        containerElement.appendChild(pressureElement);
        containerElement.appendChild(tempElement);
        containerElement.appendChild(cloudElement);
        document.getElementsByClassName("flexContainer")[0].appendChild(containerElement);

    })
    

        // const cities1 = {} as any;
        // cities1.cityName = "testtt";

}) ();
