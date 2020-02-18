import apiManager from './apiManager.js';
import convert from './convert.js';

const dataManager = {
	runIt() {},
	getTaskInput(isEditing) {
		if (!isEditing) {
			const text = document.getElementById('task-text-input').value;
			const date = document.getElementById('task-date-input').value;

			this.createTaskObj(text, date, false);
		} else {
            const id = document.getElementById('item-id').value;
            const text = document.getElementById('task-text-input').value;
            const date = document.getElementById('task-date-input').value;
            const done = JSON.parse(document.getElementById("task-done-input").value);
			this.createTaskObj(text, date, done, id);
        }
	},
	createTaskObj(text, date = null, done, id) {
        const userId = Number(sessionStorage.getItem("activeUsers"));

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
