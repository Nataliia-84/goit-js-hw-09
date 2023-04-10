

const refs={
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    bodyEl: document.querySelector('body'),
}


refs.buttonStart.addEventListener('click', onClickButtonStart);
refs.buttonStop.addEventListener('click', onClickButtonStop);

let timerId=null;
refs.buttonStop.disabled= true;

function onClickButtonStart(){
    
   refs.buttonStart.disabled=true;
   refs.buttonStop.disabled=false;
   timerId = setInterval(()=>{
    refs.bodyEl.setAttribute('style',` background: ${getRandomHexColor()}`);
    },1000)
    

}

function onClickButtonStop(){
    
    refs.buttonStart.disabled=false;
    refs.buttonStop.disabled=true;
    clearInterval(timerId);
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }