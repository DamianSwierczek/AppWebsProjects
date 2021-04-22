import { App } from './app';
import './main.scss';

const citiesInfo = [] as any[];

document.getElementById("addCityButton").addEventListener("click", () => {
    let cityName = (document.getElementById("inputCityButton") as HTMLInputElement).value;
    const app = new App(cityName);

    app.getWeather(cityName).then(data => {


        const nameElement = document.createElement("p");
        nameElement.innerHTML = data.name;

        const pressureElement = document.createElement("p");
        pressureElement.innerHTML = data.main.pressure;

        const tempElement = document.createElement("p");
        tempElement.innerHTML = data.main.temp;
        
        const humidityElement = document.createElement("p");
        humidityElement.innerHTML = data.main.humidity;

        // pressureelement.className = "classname";
        document.body.appendChild(nameElement);
        document.body.appendChild(pressureElement);
        document.body.appendChild(tempElement);
        document.body.appendChild(humidityElement);

        citiesInfo.push(data);
        app.saveData(citiesInfo);
    });

    // localStorage.removeItem("weatherData");
})