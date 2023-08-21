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

}