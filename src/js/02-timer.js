// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// import { formats } from "flatpickr/dist/utils/formatting";

const sec=document.querySelector('[data-seconds]')
const min=document.querySelector('[data-minutes]')
const hour=document.querySelector('[data-hours]')
const day=document.querySelector('[data-days]')
const buttonStart=document.querySelector("[data-start]")
const inputEl=document.querySelector('#datetime-picker')

// buttonStart.disabled=true;
// inputEl.value.disabled=true;
 
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    
    minuteIncrement: 1,
    onClose(selectedDates) {
       
        console.log(selectedDates[0]);
      }
  };

flatpickr(inputEl, options);

// let selectedDates=inputEl.value
// console.log(selectedDates)

buttonStart.addEventListener('click', onClick)
function onClick(){
    
    const timerId = setInterval(()=>{
       
        let inputTime=inputEl.value;
        
        const endDay=new Date(inputTime)
        
        console.log(endDay)
        const startDay=new Date()
        console.log(startDay)
        const deltaTime=endDay-startDay;
        console.log(deltaTime)
        
        const { days, hours, minutes, seconds }=convertMs(deltaTime);
    
        sec.textContent=seconds;
        min.textContent=minutes;
        hour.textContent=hours;
        day.textContent=days;
    
        console.log(`'${days}':${hours}:${minutes}:${seconds}`)
    
        if(days==='00'  && hours==='00' && minutes==='00' && seconds==='00' || endDay<startDay )
        {clearInterval(timerId);
            buttonStart.disabled=true;
            alert("Please choose a date in the future")
            sec.textContent='00';
            min.textContent='00';
            hour.textContent='00';
            day.textContent='00';}

    },1000)
    
}





function addLeadingZero(value){
    return String(value).padStart(2,'0')
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}






































// let timerId=null;

//

// inputEl.addEventListener('input',onInput)

// function onInput(){
   

// const dateinput=new Date(inputEl.value)
// console.log(dateinput)
// const date=new Date()
// console.log(date)
// console.log(dateinput.getTime()<date.getTime())
// if(dateinput.getTime()<=date.getTime()){

//     buttonStart.disabled=true;
//     alert("Please choose a date in the future");
    
//    return;
// } buttonStart.disabled=false;

// };

// buttonStart.addEventListener('click',onClickStartTimer)
// buttonStart.disabled=false;

// const timer2={

//     start(currentDay){
       
//        timerId = setInterval(()=>{const startTimer= new Date(currentDay)-new Date();
    
//             const { days, hours, minutes, seconds }=convertMs(startTimer)
//             sec.textContent=seconds;
//             min.textContent=minutes;
//             hour.textContent=hours;
//             day.textContent=days;
            
//             },1000)
       
//     }

// }




  






// function onClickStartTimer(){
//     buttonStart.disabled=true;
   
//     timer2.start(inputEl.value)
// }


// function pad(value){
//     return String(value).padStart(2,'0')
// }


// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = pad(Math.floor(ms / day));
//   // Remaining hours
//   const hours = pad(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = pad(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }

// // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}