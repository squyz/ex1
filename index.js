const modalWindow = document.querySelector('#modalWindow');
const modalWindowContent = document.querySelector('#modalWindowContent')
const btnStart = document.querySelector('#btnStart');

modalWindow.addEventListener('click', ()=>{
    modalWindow.style.display = 'none'
})
btnStart.addEventListener('click', ()=>{
    modalWindow.style.display = 'flex'
});

modalWindowContent.addEventListener('click', (event)=>{event.stopPropagation()})