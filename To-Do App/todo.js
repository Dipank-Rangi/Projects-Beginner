const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


// taking nput and use it
function addTask(){
    if(inputBox.value === ''){
        alert('Please Write Something!');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        
    }
   
    inputBox.value = '';
     saveData();
}

// checking the task that it is completed or not 

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
     saveData();

    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
     saveData();

    }
},false);

// to store the data in browser so when i refresh the website our lists will remain same

function saveData(){
    localStorage.setItem('data' , listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');

}

showTask();