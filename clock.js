function myDigitalClock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds =date.getSeconds();
    var zone = "AM";


// time conversion to 12hour system and am/pm determination
    if (hours > 12) {
        hours -=12;
        zone ="PM";
    }

    if (hours === 0){
        hours = 12;
    }

// adding zeros infront of one digit numbers in minutes and seconds
    minutes = minutes < 10 ? "0" + minutes:minutes;
    seconds = seconds < 10 ? "0" + seconds:seconds;

// Time display in the format of hours, mins, seconds and timezone
    var time = hours + ":" + minutes + ":" + seconds + "" +zone;

// html update 
    document.getElementById("digital-clock").textContent = time;

// clock update after every seconds(refreshing)
    setTimeout(myDigitalClock, 1000);

}

myDigitalClock();