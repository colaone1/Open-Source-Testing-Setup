// Mocked weather API responses for testing and local development

export const fetchWeather = async (requestCity) => {
  return {
    weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }],
    main: { temp: 20, humidity: 50 },
    wind: { speed: 5 },
    name: requestCity || 'MockCity',
  };
};

export const fetchWeatherByCoordinates = async (lon, lat) => {
  return {
    weather: [{ main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
    main: { temp: 18, humidity: 60 },
    wind: { speed: 7 },
    name: 'MockCity',
    coord: { lon, lat },
  };
};

export const fetchForecastByCoordinates = async (lon, lat) => {
  return {
    list: [
      {
        weather: [{ main: 'Rain', description: 'light rain', icon: '10d' }],
        dt_txt: '2024-06-25 12:00:00',
      },
      {
        weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }],
        dt_txt: '2024-06-25 15:00:00',
      },
    ],
  };
};

export const fetchForecast = async (requestCity) => {
  return {
    list: [
      {
        weather: [{ main: 'Rain', description: 'light rain', icon: '10d' }],
        dt_txt: '2024-06-25 12:00:00',
      },
      {
        weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }],
        dt_txt: '2024-06-25 15:00:00',
      },
    ],
  };
}; 