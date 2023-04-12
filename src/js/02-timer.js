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

buttonStart.disabled=true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    
    minuteIncrement: 1,
    onClose(selectedDates) {
      const dateInput = selectedDates[0].getTime();
      const currentDay = new Date().getTime()
      
      if(dateInput>currentDay){
        buttonStart.disabled=false;
        
      }
      else{
         alert("Please choose a date in the future");
      }
        
      }
  };

flatpickr(inputEl, options);



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
    
        if(days==='00'  && hours==='00' && minutes==='00' && seconds==='00')
        {clearInterval(timerId);
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

