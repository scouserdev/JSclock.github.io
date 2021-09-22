function Nowtime(){
    let currentDate = new Date();
    let currentSecond = currentDate.getSeconds();
    let secondDegrees = ((currentSecond/60)*360)+ 90;
    let currentHour   = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let MinuteDegrees = (currentMinute*6) + 90;
    let HourDegrees   = (currentHour*30) + 90;
    document.getElementsByClassName('minute')[0].style.transform = `rotate(${MinuteDegrees}deg)`;
    document.getElementsByClassName('hour')[0].style.transform = `rotate(${HourDegrees}deg)`;
    document.getElementsByClassName('second')[0].style.transform = `rotate(${secondDegrees}deg)`;
    //console.log(currentSecond);
    //console.log(currentDate.getMinutes());
}
setInterval(Nowtime,1000);