
var hours = document.getElementById("hours");
var mins = document.getElementById("mins");
var secs = document.getElementById("secs");



// var hours = document.getElementsByClassName("hours");
// var mins = document.getElementsByClassName("mins");
// var secs = document.getElementsByClassName("secs");



var hour = 0;
var min = 0;
var sec = 0;


const start2 = ()=>{
    sec++;
    if(sec == 60)
    {
        sec = 0;
        min++;
    } 
    else if(min == 60)
    {
        min = 0;
        hour++;
    }

    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    mins.innerHTML = min < 10 ? "0" + min : min;
    secs.innerHTML = sec < 10 ? "0" + sec : sec;
}

var x = null;
const start = ()=> {
    if(x == null)
    {
        x = setInterval(() => {
            start2()
        },1000)
    }
}

const stop = () => {
    clearInterval(x)
    x = null;
}


const reset = () => {
    hour = 0;
    min = 0;
    sec = 0;

    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    mins.innerHTML = min < 10 ? "0" +  min : min;
    secs.innerHTML = sec < 10 ? "0" + sec : sec;

    clearInterval(x);
    x = null;
}


