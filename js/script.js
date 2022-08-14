const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

const greetingTranslation = {
    en: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    ru: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
    be: ['Добрай ранiцы', 'Добры дзень', 'Добры вечар', 'Дабранач'],
};

const lang = 'be'; /* язык преветствия ('en', 'ru', 'be') */

const name = document.querySelector('.name');
const body = document.querySelector('body');

// const bgNum  = String(getRandomNum()).padStart(2, "0");

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

//time.textContent = "Text";



//console.log(currentTime);

function showTime() {
    const date = new Date();
    let currentTime;
    const options = {hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC'};
    if (lang=='ru') {
        
        currentTime = date.toLocaleString('ru-Ru', options);
    } else if (lang=='be') {
        currentTime = date.toLocaleString('be-Be', options);
    } else {
        currentTime = date.toLocaleString('en-Gb', options);
    };
    // console.log(currentTime);
    time.textContent = currentTime;

    function showDate () {
        const options = {month: 'long', day: 'numeric', year: 'numeric'};
        let currentDate;
        if (lang=='ru') {
            currentDate = date.toLocaleString('ru-Ru', options);
        } else if (lang=='be') {
            currentDate = date.toLocaleString('be-Be', options);
        } else {
            currentDate = date.toLocaleString('en-Gb', options);
        };
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
            return greetingTranslatio[lang][0];
        }
        else if (hours>12 && hours<=18) {
            // console.log('afternoon');
            // console.log(hours);
            return greetingTranslation[lang][1];
        }
        else if (hours>18 && hours<=23) {
            // console.log('evening');
            // console.log(hours);
            return greetingTranslation[lang][2];
        } else {
            // console.log('night');
            return greetingTranslation[lang][3];
        }
    };

    const timeOfDay = getTimeOfDay(hours);
    const greetingText = `${timeOfDay},`;

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

let randomNum = getRandomNum();

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
    randomNum++;

    if (randomNum>20) {randomNum = 1};

    setBg(randomNum);
};
function getSlidePrev() {
    console.log('prev');
    randomNum--;

    if (randomNum<1) {randomNum = 20};

    setBg(randomNum);
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
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=f25234012c7015a725d289d0b3a7d92c&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;

//   console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
};
city.addEventListener('change', getWeather);
// getWeather();


// !!!!!!!!!!!!!!!!!!quote

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 

    function getRandomNum() {
        return Math.floor(Math.random() * 3);
    };

    const x = getRandomNum();

    quote.textContent = data[x].text;
    author.textContent = data[x].author;

//     console.log(quote);
//     console.log(author);
//     console.log(x);
//     console.log(data[x].text);
};
changeQuote.addEventListener('click',getQuotes);
// getQuotes();

// !!!!!!!!!!!!!!!!!!!!!audio

const audio = new Audio();
const play = document.querySelector('.play');
const play_next = document.querySelector('.play-next');
const play_prev = document.querySelector('.play-prev');
// const button = document.querySelector('.play');
const play_list = document.querySelector('.play-list');


let isPlay = false;
import playList from './playList.js';
    // console.log(playList);

let playNum = 0;

for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');

    li.classList.add('play-item');
    li.textContent = playList[i].title;
    play_list.append(li);// здесь ваш код// здесь ваш код
}

// playList.forEach(el => {
//     const li = document.createElement('li');

//     li.classList.add('play-item');
//     li.textContent = playList[0].title;
//     play_list.append(li);
// })



function playNext () {
    playNum++;
    if (playNum>=playList.length) {playNum=0;}
    playAudio();
};
function playPrev () {
    playNum--;
    if (playNum<0) {playNum=playList.length-1;}
    playAudio();
};
function toggleBtn() {
        console.log('click');
        // play.classList.toggle('play');
        play.classList.toggle('pause');
    }
function playAudio() {
    
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    console.log(playNum)
    
    play.addEventListener('click', toggleBtn);

    if(!isPlay) {
        isPlay = true;
        audio.play();
        // play.addEventListener('click', toggleBtn);
    } else {
        isPlay = false
        audio.pause();
        // play.addEventListener('click', toggleBtn);
    };
}
// function pauseAudio() {
    
// }
play.addEventListener('click', playAudio);
play_next.addEventListener('click', playNext);
play_prev.addEventListener('click', playPrev);


// !!!!!!!!!!!!!!!!translator

