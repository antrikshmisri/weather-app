const form = document.querySelector('form');
const input = document.querySelector('.search');
const apikey = '148f3b7cdd7266c62d316dd05a19cb36';
const countryname = document.querySelector('.country h1');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temp p span');
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const wind = document.querySelector('.wind')
const cityWeather = document.querySelector('.city-weather')
form.addEventListener('submit' , async function (e){

    e.preventDefault();
    const query = input.value;
    const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}&units=metric`);
    countryname.innerText = result.data.name;
    weather.innerText = result.data.weather[0].main;
    temperature.innerText = result.data.main.temp;
    if(result.data.main.temp <= 10)
    {
        cityWeather.style.backgroundColor = 'rgba(54, 38, 200,0.3)'
    }
    else if(result.data.main.temp >= 10)
    {
        cityWeather.style.backgroundColor = 'rgba(255, 51, 31,0.3)'
    }
    min.innerText = result.data.main.temp_min;
    max.innerText = result.data.main.temp_max;
    wind.innerText = result.data.wind.speed;
})