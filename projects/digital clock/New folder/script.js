let hrs = document.getElementById("hour")
let mn = document.getElementById("min")
let ses = document.getElementById("sec")
let mil = document.getElementById("mili")


setInterval(()=>{
    let currentTime = new Date(); 

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mn.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    ses.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    mil.innerHTML = (currentTime.getMilliseconds()<100?"0":"") + currentTime.getMilliseconds();

});


