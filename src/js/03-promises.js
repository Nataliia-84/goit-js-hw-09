import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formEl=document.querySelector('.form')
console.dir(formEl);


function createPromise(position,delay){
        return new Promise((resolve,reject)=>{
    const shouldResolve = Math.random() > 0.3;
setTimeout(()=>{if (shouldResolve) {
  resolve({ position, delay })
} else {
  reject({ position, delay })
 
}},delay)
  
  })
}

// formEl.addEventListener('submit',onClickSubmit)
// function onClickSubmit(event){
//   event.preventDefault()
//   // const firstDelay=Number(formEl.elements.delay.value);
//   // const stepDelay=Number(formEl.elements.step.value);
//   // const amoutn=Number(formEl.elements.amount.value);

//  let {delay:{value:delay}, step:{value:step}, amount:{value:amount}} =event.currentTarget.elements;
//  delay=Number(delay);
//  step=Number(step);
//  amount=Number(amount);
//   for(let i=1;i<=amount;i+=1){
  
//   createPromise(i,delay).then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   })
// delay+=step
// }}


formEl.addEventListener('submit',onClickSubmit)
function onClickSubmit(event){
  event.preventDefault()
  const firstDelay=Number(formEl.elements.delay.value);
  const stepDelay=Number(formEl.elements.step.value);
  const amoutn=Number(formEl.elements.amount.value);


  for(let i=1,time=firstDelay;i<=amoutn;i+=1,time+=stepDelay){
  
  createPromise(i,time).then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  })

}}






