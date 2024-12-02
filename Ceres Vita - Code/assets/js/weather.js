class WeatherManager {
    constructor() {
        this.weatherData = null;
        this.forecast = [];
        this.init();
    }

    init() {
        this.fetchWeatherData();
        // Update weather every 30 minutes
        setInterval(() => this.fetchWeatherData(), 30 * 60 * 1000);
    }

    async fetchWeatherData() {
        try {
            // Simulate API call to weather service
            // In a real app, you would use a weather API like OpenWeatherMap
            this.weatherData = {
                temperature: 24,
                conditions: 'Partly Cloudy',
                humidity: 65,
                windSpeed: 12
            };

            this.forecast = [
                { day: 'Monday', temp: 22, condition: 'Sunny' },
                { day: 'Tuesday', temp: 23, condition: 'Cloudy' },
                { day: 'Wednesday', temp: 21, condition: 'Rain' },
                { day: 'Thursday', temp: 20, condition: 'Cloudy' },
                { day: 'Friday', temp: 24, condition: 'Sunny' },
                { day: 'Saturday', temp: 25, condition: 'Sunny' },
                { day: 'Sunday', temp: 23, condition: 'Partly Cloudy' }
            ];

            this.updateWeatherDisplay();
        } catch (error) {
            console.error('Error fetching weather data:', error);
            this.handleError();
        }
    }

    updateWeatherDisplay() {
        // Update current weather
        const currentWeather = document.querySelector('.current-weather');
        if (currentWeather) {
            currentWeather.innerHTML = `
                <div class="weather-info">
                    <h3>Current Conditions</h3>
                    <div class="temperature">${this.weatherData.temperature}°C</div>
                    <div class="conditions">${this.weatherData.conditions}</div>
                    <div class="humidity">Humidity: ${this.weatherData.humidity}%</div>
                    <div class="wind">Wind Speed: ${this.weatherData.windSpeed} km/h</div>
                </div>
            `;
        }

        // Update forecast
        const forecastGrid = document.querySelector('.forecast-grid');
        if (forecastGrid) {
            forecastGrid.innerHTML = this.forecast.map(day => `
                <div class="forecast-card">
                    <h4>${day.day}</h4>
                    <div class="forecast-temp">${day.temp}°C</div>
                    <div class="forecast-condition">${day.condition}</div>
                </div>
            `).join('');
        }
    }

    handleError() {
        const weatherContainer = document.querySelector('.weather-container');
        if (weatherContainer) {
            weatherContainer.innerHTML = `
                <div class="error-message">
                    <h3>Unable to load weather data</h3>
                    <p>Please try again later</p>
                </div>
            `;
        }
    }
}

// Initialize Weather Manager
document.addEventListener('DOMContentLoaded', () => {
    const weatherManager = new WeatherManager();
});