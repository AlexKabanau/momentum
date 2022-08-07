const time = document.querySelector('.time');
const day = document.querySelector('.date');

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

    
  }
  showTime();

