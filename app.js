var sec = document.querySelector("#sec")
var min = document.querySelector("#min")
var hour = document.querySelector("#hour")


function formatTime(value) {
    return value.toString().padStart(2, '0');
  }

var timer;
var num = 0
var num2 = 0
var num3 = 0

function startTimer(){
  timer =  setInterval(function(){
      num += 1
    if(num === 60){
        num = 0
        num2 += 1
        if(num2 === 60){
            num2 = 0
            num3 +=1
            hour.innerHTML =  formatTime(num3)
           }
         min.innerHTML = formatTime(num2)
       }
       sec.innerHTML = formatTime(num)
    },1000)
}
    
function stopTimer(){
    clearInterval(timer)
}

function resetTimer(){
    clearInterval(timer)
    var num = 0
    var num2 = 0
    var num3 = 0
 
sec.innerHTML = formatTime(num)    
min.innerHTML = formatTime(num2)   
hour.innerHTML = formatTime(num3)   
}