const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const API_KEY = '63cc982290f9dafc27ca6a839fd99d68';

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = cityInput.value;
    if (city === '') {
        displayError('Please enter a city name.');
        return;
    }

    try {
        const weatherData = await getWeatherData(city);
        card.style.display = 'block';
        displayWeather(weatherData);
    } catch (error) {
        console.error('Error displaying the card:', error);
        displayError('Could not retrieve weather data. Please try again.');
    }

});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(apiUrl);
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
}

function displayWeather(data) {
    const { name: city, main: { temp, humidity }, weather: [{description, id}] } = data;

    card.textContent = ""
    card.style.display = 'flex';

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add('city');
    tempDisplay.classList.add('temp');
    humidityDisplay.classList.add('humidity');
    descDisplay.classList.add('description');
    weatherEmoji.classList.add('weather-emoji');

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(condition) {
    switch (true) {
        case condition >= 200 && condition < 300:
            return '⛈️';
        case condition >= 300 && condition < 500:
            return '🌦️';
        case condition >= 500 && condition < 600:
            return '🌧️';
        case condition >= 600 && condition < 700:
            return '❄️';
        case condition >= 700 && condition < 800:
            return '🌫️';
        case condition === 800:
            const hours = new Date().getHours();
            if (hours >= 18 || hours < 6) {
                return '🌕';
            }
            return `☀️`;
        default:
            return '🌤️';
    }
}

function displayError(message) {
    const errorDisplay = document.querySelector('.errorDisplay');
    errorDisplay.textContent = message;
    errorDisplay.style.display = 'block';
}