let input = document.getElementById('entry');
let addTaskBtn = document.getElementById('add-task-btn');
let taskContainer = document.getElementById('list-container');
let tasklen =document.getElementById('untask');
let newTasklen =0;


addTaskBtn.addEventListener('click',()=> {
   
    if(input.value === ''){
        alert("You must write something");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        newTasklen = taskContainer.childNodes.length-1;
        newTasklen++;
        tasklen.innerText = newTasklen-1;
        console.log(taskContainer.childNodes.length-1);
        

    }
    input.value="";
})

taskContainer.addEventListener('click', (e)=> {
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // console.log(taskContainer.childNodes.length - 1);
        newTasklen--;
        tasklen.innerText =newTasklen-1;
    }
    
    
},false);




