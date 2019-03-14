// //<ul id="incomplete-tasks">
//                 <li>
//                     <input type="checkbox">
//                     <label>Pay Bills</label>
//                     <input type="text">
//                     <button class="edit">Edit</button>
//                     <button class="delete">Delete</button>
//                 </li>

document.addEventListener('DOMContentLoaded', function (event) {
    document.addEventListener('submit', function (event) {
        let submitbutton = document.querySelector('#incomplete-tasks')
        let li=document.createElement('li')
        let label=document.createElement('label')
        let newTasks=document.querySelector('#new-tasks').value 
        label.innerHTML=newTasks

        let ul=document.querySelector('#incomplete-tasks')
        li.appendElement(label)
        ul.appendElement(li)
        


    })
})