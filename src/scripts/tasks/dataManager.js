import apiManager from './apiManager.js';
import convert from './convert.js';

const dataManager = {
	runIt() {},
	getTaskInput(isEditing) {
        console.log(isEditing, "ie editing")
		if (!isEditing) {
			const text = document.getElementById('task-text-input').value;
			const date = document.getElementById('task-date-input').value;

            console.log("not edigig")
			this.createTaskObj(text, date, false);
		} else {
            const id = document.getElementById('item-id').value;
            const text = document.getElementById('task-text-input').value;
            const date = document.getElementById('task-date-input').value;
            const done = JSON.parse(document.getElementById("task-done-input").value);
            console.log(done)
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

        // console.log(text, date, done, id)
        if(id){
            console.log(id)
            console.log("ediging")
            apiManager.editTask(newObj, id)
            .then(() => {
                convert.runIt();
            })
        } else {
            console.log(id)
            console.log("Addig")
            apiManager.addtask(newObj)
            .then(() => {
                convert.runIt();
            });

        }
	}
};

export default dataManager;
