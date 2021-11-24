const listItems = document.querySelectorAll('.list__item');
const lists = document.querySelectorAll('.list');
const date = document.querySelector('.box__task')



const todayDate = new Date();
const currYear = todayDate.getFullYear();
const currMonth = todayDate.getMonth()+1;
const currDay = todayDate.getDate();


const dateNow = document.querySelector('.box__task__date')
const taskList = document.querySelector('.box__task__title')
taskList.textContent = "Список задач на:"
const inDate = dateNow.textContent

dateNow.style.backgroundColor = 'black'
dateNow.style.borderRadius = '5px'
dateNow.style.color = 'white'
dateNow.style.textAlign = 'center'


const time = `${inDate} ${currDay}. ${currMonth}. ${currYear}`
dateNow.innerHTML = `${time}`




let draggedItem = null;



for (let i = 0; i < listItems.length; i++ ){
   const item = listItems[i];


function dragStart(){
    console.log('dragstart');
    draggedItem = item;
    setTimeout(function () {
        item.style.display = 'none'
    }, 0)

}

function dragEnd(){
    console.log('dragend');
    setTimeout(function (){
        draggedItem.style.display = 'block'
        draggedItem = null;
    },0)
}


   item.addEventListener('dragstart', dragStart);
   item.addEventListener('dragend', dragEnd);


   for (let j = 0; j < lists.length; j++ ){
    const list = lists[j];


    list.addEventListener('dragover', function(e){
        console.log('dragover',e)
       e.preventDefault();
    })


    list.addEventListener('dragenter', function(e){
        console.log('dragenter',e)
        e.preventDefault();
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
    })


    list.addEventListener('drop', function(e){
        console.log('drop',e)
        this.append(draggedItem)
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    })

   }

}




