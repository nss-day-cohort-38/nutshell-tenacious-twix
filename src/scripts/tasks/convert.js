import apiManager from './apiManager.js';
import dataManager from './dataManager.js';
import DOMManager from './DOMManager.js';
import eventListeners from './eventListeners.js';
import validate from './validate.js';

const convert = {
	runIt(activeUsers) {
		this.sideBarHTML(activeUsers).then(data => {
            const html = data[0];
			DOMManager.renderMenuItems(html);
                data[1].forEach(element => {
                    eventListeners.deleteTask(element.id, activeUsers);
                    eventListeners.editTask(element.id, activeUsers);
                    eventListeners.taskItem(element.id, activeUsers);
                })
            

			DOMManager.renderMenuTop(this.sideBarTop());
			eventListeners.addTask(activeUsers);
			$('.ui.sidebar').sidebar('show');
		});
	},
	sideBarHTML(activeUsers) {
		return apiManager.getTasks(activeUsers).then(data => {
			let taskHTML = '';

			data.forEach(element => {
				taskHTML += `<a class="item" id="task--${element.id}"><div id="task-text--${element.id}">${element.task_text}</div> <i class="edit outline icon" id="edit-task--${element.id}"></i><i class="x icon" id="delete--${element.id}"></i></a>`;
			});

			return [taskHTML, data];
		});
	},
	sideBarTop() {
		return `
           <div class="ui icon button sidebar-top-item" id="add-task">
            <i class="add icon"></i>
          </div>
            <button class="sidebar-top-item" id="check-all">Check All</button>
            <button class="sidebar-top-item" id="uncheck-all">Uncheck All</button>

        `;
	},
	taskFormHTML() {
		return `
            <div class="item">
                <p>Add Task</p>
                <input type="text" id="isEditingTask" hidden>
                <input type="text" id="task-done-input" hidden>
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
