import { App } from './app';
import './main.scss';

const citiesInfo = [] as any[];

document.getElementById("addCityButton").addEventListener("click", () => {
    let cityName = (document.getElementById("inputCityButton") as HTMLInputElement).value;
    const app = new App(cityName);

    app.getWeather(cityName).then(data => {

        const pressureElement = document.createElement("p");
        pressureElement.innerHTML = data.main.pressure;
        // pressureelement.className = "classname";
        document.body.appendChild(pressureElement);

        citiesInfo.push(data);
        app.saveData(citiesInfo);
    });

    // localStorage.removeItem("weatherData");
})