const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

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
    console.log(hours);

    function getTimeOfDay(hours){
        if (hours>0 && hours<=6) {
            return 'morning';
        }
        else if (hours>6 && hours<=12) {
            return 'day';
        }
        else if (hours>12 && hours<=18) {
            return 'evening';
        } else {
            return 'night';
        }
    };

    const timeOfDay = getTimeOfDay(hours);
    const greetingText = `Good ${timeOfDay}`;

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
window.addEventListener('load', getLocalStorage)
