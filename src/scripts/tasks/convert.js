import apiManager from './apiManager.js';
import dataManager from './dataManager.js';
import DOMManager from './DOMManager.js';
import eventListeners from './eventListeners.js';
import validate from './validate.js';

const convert = {
	runIt() {
		this.sideBarHTML().then(data => {
            const html = data[0];
			DOMManager.renderMenuItems(html);
                data[1].forEach(element => {
                    eventListeners.deleteTask(element.id);
                    eventListeners.editTask(element.id);
                    eventListeners.taskItem(element.id);
                })
            

			DOMManager.renderMenuTop(this.sideBarTop());
            eventListeners.addTask();
            eventListeners.closeTask();
			
		});
	},
	sideBarHTML() {
		return apiManager.getTasks().then(data => {
			let taskHTML = '';

			data.forEach(element => {
                let textHTML = `<div class="task-text" id="task-text--${element.id}">${element.task_text}</div>`;
                if(element.done == true){
                    textHTML = `<div class="task-text"><s  id="task-text--${element.id}">${element.task_text}</s></div>`;
                }

				taskHTML += `<a class="item tasks" id="task--${element.id}">${textHTML}<div><i class="edit outline icon" id="edit-task--${element.id}"></i><i class="x icon" id="delete--${element.id}"></i></div></a>`;
			});

			return [taskHTML, data];
		});
	},
	sideBarTop() {
		return `
           <div class="ui icon button sidebar-top-item" id="close-sidebar">
           <i class="x icon"></i>
          </div>
          <div class="ui icon button sidebar-top-item" id="add-task">
            <i class="add icon"></i>
          </div>
            

        `;
        // <button class="sidebar-top-item" id="check-all">Check All</button>
        // <button class="sidebar-top-item" id="uncheck-all">Uncheck All</button>
	},
	taskFormHTML() {
		return `
            <div class="item">
                <p>Add Task</p>
                <input type="text" id="isEditingTask" hidden>
                <input type="text" id="task-done-input" hidden>
                <input type="text" id="item-id" hidden>
                <div class="ui transparent input task-input">
                    <input id="task-text-input" type="text" placeholder="Type Task Here">
                </div>     
                <div class="ui transparent input task-input">
                <input id="task-date-input" type="date">                
                </div>  
            </div>
        `;
    },
    clearHTML(){
        return ``
    }
};

export default convert;
