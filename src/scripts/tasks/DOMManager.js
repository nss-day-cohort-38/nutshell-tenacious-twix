/* Author: Trinity Terry */
/* Purpose: Render's components to Task Sidebar on DOM */

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
            <div class="item tasks" id="add-task-form"></div>
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

 
    },
    createOpenButton(){
        document.getElementById("sidebar-button").innerHTML = `
        <div class="ui red button">
        Open Taskbar
      </div>
      <a class="ui basic red left pointing label">
        <i class="tasks icon"></i>
      </a>`
    }



}

export default DOMManager;