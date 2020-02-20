/* Author: Trinity Terry */
/* Purpose: Converts data to HTML */

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
                    eventListeners.taskItem(element.id);
                    eventListeners.hoverOverTask();
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
                console.log()
                taskHTML += `
                <a class="item tasks" id="task--${element.id}">
                <div>
                    ${checkHTML}
                </div>
                <div class="task-text" id="task-text--${element.id}">
                ${element.task_text}
                </div>
                <div class="task-icons">

                <i class="calendar alternate outline icon cal-icon" data-position="bottom left" data-content="Complete Date: ${element.complete_on}"></i>  
                <i class="x icon delete-task" id="task-delete--${element.id}"></i>    

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
        `;

	},
	taskFormHTML() {
		return `
            <a class="item task-item" id="task-input">
                <input type="text" id="isEditingTask" hidden>
                <input type="text" id="task-done-input" hidden>
                <input type="text" id="item-id" hidden>
                <div class="ui transparent input task-input">
                    <input id="task-text-input" type="text" placeholder="Type Task Here" data-position="bottom left" data-content="Enter task">
                </div>     
                <div class="ui transparent input task-input">
                    <input id="task-date-input" type="date" data-position="bottom left" data-content="enter date">
                    <i class="x icon discard-task" id="discard-task"></i>                
                </div>  
            </a>
        `;
    },
    clearHTML(){
        return ``
    }
};

export default convert;
