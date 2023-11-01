const modalWindow = document.querySelector('#modalWindow');
const modalWindowContent = document.querySelector('#modalWindowContent')
const btnStart = document.querySelector('#btnStart');
const btnSend = document.querySelector('#btnSend');

modalWindow.addEventListener('click', ()=>{
    modalWindow.style.display = 'none'
})
btnStart.addEventListener('click', ()=>{
    modalWindow.style.display = 'flex'
});
modalWindowContent.addEventListener('click', (event)=>{event.stopPropagation()});


//функция для удобства получения данных из инпутов
function getInput(number){
    return document.querySelector('#input'+number).value
}

btnSend.addEventListener('click',()=>{
    modalWindow.style.display = 'none';
    
    const data = {
        'input1': getInput(1),
        'input2': getInput(2),
        'input3': getInput(3),
        'input4': getInput(4),
        'input5': getInput(5),
    };

    const dataJson = JSON.stringify(data);
    document.querySelector('#data').innerHTML = dataJson;
})