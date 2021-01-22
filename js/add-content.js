//Today's date
var today = new Date();
var year = today.getFullYear()
var month = today.getMonth()+1;
var day = today.getDate();
var fullDate = day + '. ' + month + '. ' + year;


var elMsg = document.getElementById('date');
elMsg.textContent = 'Dnešný dátum je: ' + fullDate;

//Difference between today's date and founding of Slovak Republic
var est = new Date('Jan 01, 1993');
var difference = today.getTime() - est.getTime();
difference = ( difference / 31556900000 );

var elDif = document.getElementById('difference');
elDif.textContent = 'Čo je ' + Math.floor(difference) + ' rokov od vzniku Slovenskej Republiky';


//CLOCK
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' +min : min;
    sec = sec < 10 ? '0' + sec : sec;

    let currentTime = hour + ':'
        + min + ':' + sec;

   
    document.getElementById('clock')
            .innerHTML =  currentTime;
    
}
showTime();

//GREETING
function greeting() {
    let time = new Date();
    let hour = time.getHours();
    var greeting;

    if (hour > 18) {
        greeting = 'Dobrý večer';
    }
    else if (hour > 12) {
        greeting = 'Dobrý deň';
    }
    else if (hour > 0) {
        greeting = 'Dobré ráno';
    } else {
        greeting = 'Vitajte';
    }
    
    var elGreeting = document.getElementById('greeting');
    elGreeting.textContent =  greeting;
}
greeting();