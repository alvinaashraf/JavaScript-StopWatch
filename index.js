


const timer=document.querySelector('.timer');

const start=document.getElementById('start');

const stop=document.getElementById('stop');
const reset=document.getElementById('reset');

let startTime=0;
let elapsedTime=0
let timeInterval;

function startTimer(){

startTime=Date.now()-elapsedTime;

timeInterval=setInterval(()=>{
elapsedTime=Date.now()- startTime;
timer.textContent=formatTime (elapsedTime);
},10);

start.disabled=true;
stop.disabled=false;
}


function formatTime(elapsedTime){
const ms= Math.floor((elapsedTime % 1000)/10);
const sec= Math.floor((elapsedTime % (1000 *60))/10000);

const min= Math.floor((elapsedTime % (1000 *60*60))/(10000 *60));
const hours= Math.floor(elapsedTime/(10000 *60*60));


return (


(hours ?  (hours > 9 ? hours: '0' +hours) : '00')
	+ ":"+


(min ?  (min > 9 ? min: '0' +min) : '00')
	+ ":"+

	(sec ?  (sec > 9 ? sec: '0' +sec) : '00')
	+ "."+

	(ms > 9  ? ms : '0' + ms));



}

function StopTimer(){
clearInterval(timeInterval);

start.disabled=false;
stop.disabled=true;

}

function resetTimer(){
clearInterval(timeInterval);
elapsedTime=0

timer.textContent='00:00:00';

start.disabled=false;
stop.disabled=true;
}


start.addEventListener('click', startTimer);

stop.addEventListener('click', StopTimer);
reset.addEventListener('click', resetTimer);


