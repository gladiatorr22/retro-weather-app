document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");
    const windSpeedDisplay = document.getElementById("wind-speed");

    getWeatherBtn.addEventListener('click' , async ()=>{
        const city = cityInput.value.trim();
        if(!city) return;
        
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError(error.message); 
        }
        cityInput.value = "";
    });

    async function fetchWeatherData(city) {
        const url = `/api/weather?city=${encodeURIComponent(city)}`;
        const response = await fetch(url);

        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "City not found");
        }
        const data = await response.json();
        return data;
    }

    function displayWeatherData(data) {
        const { name, main, weather, wind } = data;
        cityNameDisplay.textContent = name.toUpperCase();
        temperatureDisplay.textContent = `Temperature : ${main.temp} °C`;
        descriptionDisplay.textContent = `Weather : ${weather[0].description.toUpperCase()}`;
        windSpeedDisplay.textContent = `Wind Speed : ${((wind.speed) * 3.6).toFixed(1)} KM/H`;
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }

    function showError(message = "City not found. Please try again."){
        weatherInfo.classList.add('hidden');
        errorMessage.textContent = message.toUpperCase();
        errorMessage.classList.remove('hidden');
    }
});