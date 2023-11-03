let milisec=0;
let sec =0;
let minutes=0;
let hours =0;

let gettime =document.getElementById("timeshow")

// start button
let start =document.getElementById("start")
let timeref
start.addEventListener('click',time)
function time(){
    console.log(this)
    timeref = setInterval(updateTime,10)//stopwatch is updated every 10 ms
function updateTime(){
     milisec =milisec+10; 
    if(milisec == 1000){sec =sec+1
        milisec=0
        if(sec ==60){   minutes=minutes+1
            sec=0
              if(minutes == 60){hours=hours+1
                minutes=0
               }}}
            
//update time 
let h,m,s,ms;
if(hours<10){ h='0'+hours
}else{h=hours}

if(minutes<10){ m='0'+minutes
}else{m=minutes}

if(sec <10){s='0'+sec
}else{s=sec}

if(milisec <10){ms ='0'+milisec
}else if(milisec<100){ms='00'+milisec
}else{ms=milisec}

gettime.innerHTML =`${h}:${m}:${s}:${ms}`

}
}
//pause button
document.getElementById("pause").onclick=function(){
    clearInterval(timeref)
}
//reset button
document.getElementById("reset").onclick=function(){
    clearInterval(timeref)
 milisec=0;
 sec =0;
 minutes=0;
 hours =0;
 gettime.innerHTML=' 00:00:00:000'


}
