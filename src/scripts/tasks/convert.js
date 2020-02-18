import apiManager from './apiManager.js';
import DOMManager from './DOMManager.js';
import eventListeners from './eventListeners.js';

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
                let checkHTML = `<i id="check-task--${element.id}" class="circle outline icon"></i>`;

                if(element.done == true){
                    checkHTML = `<i id="check-task--${element.id}" class="check circle icon"></i>`;
                }
                
                taskHTML += `
                <a class="item tasks" id="task--${element.id}">
                <div>
                    ${checkHTML}
                </div>
                <div class="task-text" id="task-text--${element.id}">
                ${element.task_text}
                </div>
                <div>
                <i class="x icon delete-task" id="delete--${element.id}"></i>
                </div>
                </a>`;
			});

			return [taskHTML, data];
		});
	},
	sideBarTop() {
		return `
           <i id="close-sidebar" class="x icon sidebar-top-item"></i>
          <div class="ui icon button sidebar-top-item" id="add-task">
            Add <i class="add icon"></i>
          </div>
          <div class="ui icon button sidebar-top-item" id="check-all">
            Uncheck All
          </div>
          <div class="ui icon button sidebar-top-item" id="uncheck-all">
            Check All
          </div>

            

        `;
        // <button class="sidebar-top-item" id="check-all">Check All</button>
        // <button class="sidebar-top-item" id="uncheck-all">Uncheck All</button>
	},
	taskFormHTML() {
		return `
            <a class="item task-item" id="task-input">
                <input type="text" id="isEditingTask" hidden>
                <input type="text" id="task-done-input" hidden>
                <input type="text" id="item-id" hidden>
                <div class="ui transparent input task-input">
                    <input id="task-text-input" type="text" placeholder="Type Task Here">
                </div>     
                <div class="ui transparent input task-input">
                    <input id="task-date-input" type="date">                
                </div>  
            </a>
        `;
    },
    clearHTML(){
        return ``
    }
};

export default convert;
