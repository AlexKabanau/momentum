const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('body');

// const bgNum  = String(getRandomNum()).padStart(2, "0");

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

//time.textContent = "Text";



//console.log(currentTime);

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;

    function showDate () {
        const options = {month: 'long', day: 'numeric'};
        const currentDate = date.toLocaleDateString('ru-Ru', options);
        day.textContent = currentDate;
        //console.log(currentDate);
    };
    showDate();

    setTimeout(showTime, 1000);
};
showTime();

function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    // console.log(hours);

    function getTimeOfDay(hours){
        if (hours>6 && hours<=12) {
            // console.log('morning');
            return 'morning';
        }
        else if (hours>12 && hours<=18) {
            // console.log('afternoon');
            // console.log(hours);
            return 'afternoon';
        }
        else if (hours>18 && hours<=23) {
            // console.log('evening');
            // console.log(hours);
            return 'evening';
        } else {
            // console.log('night');
            return 'night';
        }
    };

    const timeOfDay = getTimeOfDay(hours);
    const greetingText = `Good ${timeOfDay},`;

    greeting.textContent = greetingText;

    /*form.addEventListener('submit', function(event){
        // alert('submit!');
        event.preventDefault();
        console.log('E-mail' + login.value);
        alert('E-mail: ' + login.value);
        console.log('password' + password.value);
        alert('password: ' + password.value);
    });*/
    
    setTimeout(showGreeting, 1000);
};
showGreeting();

function getRandomNum() {
    return Math.floor(Math.random() * (20 - 1) + 1);
};

let Num = getRandomNum();

function setBg(x) {
    
    const date = new Date();
    const hours = date.getHours();

    function getTimeOfDay(hours){
        if (hours>6 && hours<=12) {
            // console.log('morning');
            return 'morning';
        }
        else if (hours>12 && hours<=18) {
            // console.log('afternoon');
            // console.log(hours);
            return 'afternoon';
        }
        else if (hours>18 && hours<=23) {
            // console.log('evening');
            // console.log(hours);
            return 'evening';
        } else {
            // console.log('night');
            return 'night';
        }
    };

    const timeOfDay = getTimeOfDay(hours);
    const bgNum  = String(x).padStart(2, "0");

    const img = new Image();
    img.src = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/'+timeOfDay+'/'+bgNum+'.jpg';
    img.onload = () => {      
        body.style.backgroundImage = "url('"+img.src+"')";// здесь тоже ваш код
      };
    // body.style.backgroundImage = "url('"+str+"')";

    // console.log(bgNum);

    // console.log(timeOfDay);

    // console.log(img.src);
    // console.log(url);

};
// setBg();

function getSlideNext() {
    console.log('next');
    Num++;

    if (Num>20) {Num = 1};

    setBg(Num);
};
function getSlidePrev() {
    console.log('prev');
    Num--;

    if (Num<1) {Num = 20};

    setBg(Num);
};

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

/*---------------------------------------*/

function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
window.addEventListener('load', getLocalStorage);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!WEATHER
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city  = document.querySelector('.city');

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=f25234012c7015a725d289d0b3a7d92c&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;

  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
};
city.addEventListener('change', getWeather);
// getWeather();


