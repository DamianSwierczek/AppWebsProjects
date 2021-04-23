import { App } from './app';
import './main.scss';

const citiesInfo = [] as any[];

document.getElementById("addCityButton").addEventListener("click", () => {
    let cityName = (document.getElementById("inputCityButton") as HTMLInputElement).value;
    const app = new App(cityName);

    app.getWeather(cityName).then(data => {

        const containerElement = document.createElement("div");
        containerElement.className = "weatherContainer";
        const nameElement = document.createElement("p");
        nameElement.innerHTML = data.name;

        const pressureElement = document.createElement("p");
        pressureElement.innerHTML = data.main.pressure;

        const tempElement = document.createElement("p");
        tempElement.innerHTML = data.main.temp;
        
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

    const cities = JSON.parse(localStorage.getItem('weatherData'));
    console.log(cities);
    const containerElement = document.createElement("div");
        containerElement.className = "weatherContainer";
        const nameElement = document.createElement("p");
        nameElement.innerHTML = cities[0].name;

        const pressureElement = document.createElement("p");
        pressureElement.innerHTML = cities[0].main.pressure;

        const tempElement = document.createElement("p");
        tempElement.innerHTML = cities[0].main.temp;
        
        const cloudElement = document.createElement("p");
        cloudElement.innerHTML = cities[0]['weather'][0]['main'];

        // pressureelement.className = "classname";
        containerElement.appendChild(nameElement);
        containerElement.appendChild(pressureElement);
        containerElement.appendChild(tempElement);
        containerElement.appendChild(cloudElement);
        document.getElementsByClassName("flexContainer")[0].appendChild(containerElement);


        const cities1 = {} as any;
        cities1.cityName = "testtt";

}) ();
