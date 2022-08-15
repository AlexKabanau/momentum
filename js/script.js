const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

const greetingTranslation = {
    En: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    Ru: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
    Be: ['Добрай ранiцы', 'Добры дзень', 'Добры вечар', 'Дабранач'],
};

let lang = 'En'; /* язык преветствия ('En', 'Ru', 'Be') */
const search = 'Git';/*'Git', 'Flickr', 'Unsplash'*/

const name = document.querySelector('.name');
const body = document.querySelector('body');

// const bgNum  = String(getRandomNum()).padStart(2, "0");

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

//time.textContent = "Text";
const langEn = document.querySelector('.en');
const langRu = document.querySelector('.ru');
const langBe = document.querySelector('.be');
console.log(langEn);
console.log(langRu);
console.log(langBe);

langEn.addEventListener('click', addActive);
langRu.addEventListener('click', addActive);
langBe.addEventListener('click', addActive);



function addActive(element) {
    console.log(element);
    langEn.classList.remove('active');
    langRu.classList.remove('active');
    langBe.classList.remove('active');
    console.log(element);
    element.target.classList.add('active');
    lang = element.target.innerHTML
//     // console.log(event)
//     // if (langEn.classList.contains('active'))
//     // event.classList.toggle('active')
}

//console.log(currentTime);

function showTime() {
    const date = new Date();
    let currentTime;
    const options = {hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC'};
    if (lang=='Ru') {
        
        currentTime = date.toLocaleString('ru-Ru', options);
    } else if (lang=='Be') {
        currentTime = date.toLocaleString('be-Be', options);
    } else {
        currentTime = date.toLocaleString('en-Gb', options);
    };
    // console.log(currentTime);
    time.textContent = currentTime;

    function showDate () {
        const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
        let currentDate;
        if (lang=='Ru') {
            currentDate = date.toLocaleString('ru-Ru', options);
        } else if (lang=='Be') {
            currentDate = date.toLocaleString('be-BY', options);
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
            return greetingTranslation[lang][0];
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
    // img.src = getLinkToImage();
    img.src = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/'+timeOfDay+'/'+bgNum+'.jpg';
    
    img.onload = () => {
        // console.log('done')      
        body.style.backgroundImage = "url('"+img.src+"')";// здесь тоже ваш код
      };
    // body.style.backgroundImage = "url('"+str+"')";

    // console.log(bgNum);

    // console.log(timeOfDay);

    // console.log(img.src);
    // console.log(url);

};
// async function getLinkToImage() {
//     const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=barcelone&client_id=Xu--LAsXa7QzwmNq_m-XqvSc9x_YPT1Gi5F3YW03sSY';
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.urls.regular);
//     // return data.urls.regular
//     // body.style.backgroundImage = "url('"+data.urls.regular+"')";
// }
// const x = getLinkToImage();
// console.log(x);
// body.style.backgroundImage = x;

function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=belarus&client_id=Xu--LAsXa7QzwmNq_m-XqvSc9x_YPT1Gi5F3YW03sSY';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data.urls.regular);
        body.style.backgroundImage = "url('"+data.urls.regular+"')";
      });
      
    
//     //   return data.urls.regular;
}
function getFlickrLinkToImage(randomNum) {
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6111c6b5ff2145ab8871ef967b9e0d99&tags=belarus&extras=url_l&format=json&nojsoncallback=1';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.photos.photo[randomNum].url_l);
        body.style.backgroundImage = "url('"+data.photos.photo[randomNum].url_l+"')";
    });

     
    
//     //   return data.urls.regular;
}
// getFlickrLinkToImage();

// getLinkToImage();
// function setBgUnsplash () {
//     const img = new Image();
//     img.src = getLinkToImage();
//     img.onload = () => {      
//         body.style.backgroundImage = "url('"+img.src+"')";// здесь тоже ваш код
//       };
// };
// setBgUnsplash();
// setBg();

function getSlideNext() {
    // console.log('next');
    randomNum++;
    if (lang=="En") {
        if (randomNum>20) {randomNum = 1};

        // getLinkToImage();//подключен unsplash
        // getFlickrLinkToImage(randomNum);//подключен flickr
        setBg(randomNum);
    } else if (lang=="Ru") {
        getLinkToImage();//подключен unsplash
    } else {
         getFlickrLinkToImage(randomNum);//подключен flickr
    }

};
function getSlidePrev() {
    // console.log('prev');
    randomNum--;
    if (lang=="En") {
        if (randomNum<1) {randomNum = 20};

        // getLinkToImage();//подключен unsplash
        // getFlickrLinkToImage(randomNum);//подключен flickr
        setBg(randomNum);
    } else if (lang=="Ru") {
        getLinkToImage();//подключен unsplash
    } else {
         getFlickrLinkToImage(randomNum);//подключен flickr
    }

    // if (randomNum<1) {randomNum = 20};

    // getLinkToImage();//подключен unsplash
    // getFlickrLinkToImage(randomNum);//подключен flickr

    // setBg(randomNum);
};

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

/*---------------------------------------*/

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
  }
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
      }
  }
window.addEventListener('load', getLocalStorage);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!WEATHER
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const city = document.querySelector('.city');
if (!city.value) {city.value = 'Минск'}

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=f25234012c7015a725d289d0b3a7d92c&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  humidity.textContent = `${Math.round(data.main.humidity)}%`;
  windSpeed.textContent = `${Math.round(data.wind.speed)} m/s`;

//   console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
};
getWeather();
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
getQuotes();
changeQuote.addEventListener('click',getQuotes);
// getQuotes();

// !!!!!!!!!!!!!!!!!!!!!audio

const audio = new Audio();
const play = document.querySelector('.play');
const play_next = document.querySelector('.play-next');
const play_prev = document.querySelector('.play-prev');
// const button = document.querySelector('.play');
const play_list = document.querySelector('.play-list');
const volume_icon = document.querySelector('.volume-icon');

volume_icon.addEventListener('click', muteToggle);

function muteToggle () {
    volume_icon.classList.toggle('mute');
    audio.muted = !audio.muted;
    // if (audio.muted) {
    //     audio.volume = 1;
    // } else {audio.volume = 0}
};

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

    const timeline = document.querySelector(".timeline");
    timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
    }, false);

    setInterval(() => {
        const progressBar = document.querySelector(".progress");
        progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
        // document.querySelector(".time .current").textContent = getTimeCodeFromNum(
        //   audio.currentTime
        // );
      }, 500);
}
// function pauseAudio() {
    
// }
play.addEventListener('click', playAudio);
play_next.addEventListener('click', playNext);
play_prev.addEventListener('click', playPrev);



// !!!!!!!!!!!!!!!!translator

