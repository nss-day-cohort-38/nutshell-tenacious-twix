import apiManager from './apiManager.js'
import convert from './convert.js'
import dataManager from './dataManager.js'
import eventListeners from './eventListeners.js'
import validate from './validate.js'

const DOMManager = {
    runIt(){
        this.createDivs();
    },
    renderMenuItems(sidebarHTML){
        document.getElementById("sidebar-items").innerHTML = sidebarHTML;
    },
    createDivs(){
        document.getElementById("sidebar-menu").innerHTML = `
            <div id="sidebar-top"></div>
            <div id="add-task-form"></div>
            <div id="sidebar-items"></div>
            
        `;

    },
    renderMenuTop(topHTML){
        document.getElementById("sidebar-top").innerHTML = topHTML;
    },
    renderAddTask(taskFormHTML){
        document.getElementById("add-task-form").innerHTML = taskFormHTML;
    },
    renderSingleTask(id, taskHTML){
        document.getElementById(`task--${id}`).innerHTML = taskHTML;

    },
    populateTaskInput(data){
   
        document.getElementById("isEditingTask").value = true;
        document.getElementById("item-id").value = data.id;
        document.getElementById("task-text-input").value = data.task_text;
        document.getElementById("task-date-input").value = data.complete_on;
        document.getElementById("task-done-input").value = data.done;

 
    }



}

export default DOMManager;