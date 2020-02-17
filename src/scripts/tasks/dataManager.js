import apiManager from './apiManager.js';
import convert from './convert.js';
import DOMManager from './DOMManager.js';
import eventListeners from './eventListeners.js';
import validate from './validate.js';

const dataManager = {
	runIt() {},
	getTaskInput(isEditing, id) {
		if (!isEditing) {
			const text = document.getElementById('task-text-input').value;
			const date = document.getElementById('task-date-input').value;

			this.createTaskObj(text, date, false);
		} else {
            const text = document.getElementById('task-text-input').value;
			const date = document.getElementById('task-date-input').value;
            const done = document.getElementById("task-done-input").value;
			this.createTaskObj(text, date, done, id);
        }
	},
	createTaskObj(text, date, done, id) {

        const userId = sessionStorage.getItem("activeUsers");
        const newObj = {
			userId: userId,
			complete_on: date,
			done: done,
			task_text: text
        };

        if(id){
            apiManager.editTask(newObj, id)
            .then(() => {
                convert.runIt();
            })
        } else {
            apiManager.addtask(newObj)
            .then(() => {
                convert.runIt();
            });

        }
	}
};

export default dataManager;
