let secondClock = document.querySelector("#secondDigit");
let minuteClock = document.querySelector("#minuteDigit");
let hourClock = document.querySelector("#hourDigit");
let dayClock = document.querySelector("#dayDigit");

function updateClock(timeLeft){
    if(timeLeft < 1000) return;
    dayClock.innerHTML = (Math.trunc(timeLeft/86400000));
    hourClock.innerHTML = (Math.trunc(timeLeft/3600000))%24;
    minuteClock.innerHTML = (Math.trunc(timeLeft/60000))%60;
    secondClock.innerHTML = (Math.trunc(timeLeft/1000))%60;
}

//Select deadline date -> Get current date -> get seconds difference
let now = new Date();
let deadline = new Date(now.getFullYear(), now.getMonth()+1);
let timeLeftUTC = deadline.getTime() - now.getTime();
updateClock(timeLeftUTC);
setInterval(()=>{
    updateClock(timeLeftUTC);
    timeLeftUTC -= 1000;
},1000);


