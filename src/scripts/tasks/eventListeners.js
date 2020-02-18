import apiManager from './apiManager.js';
import convert from './convert.js';
import dataManager from './dataManager.js';
import DOMManager from './DOMManager.js';

const eventListeners = {
	runIt() {},
	addTask() {
		document.getElementById('add-task').addEventListener('click', () => {
			DOMManager.renderAddTask(convert.taskFormHTML());
			this.submitTask();
		});
	},
	submitTask(id) {
		document
			.getElementById('task-text-input')
			.addEventListener('keypress', e => {
				if (e.keyCode == 13) {
					if (
						document.getElementById('isEditingTask').value == false
					) {
						
						dataManager.getTaskInput(false);
						DOMManager.renderAddTask(convert.clearHTML());
					} else {
						dataManager.getTaskInput(true);
						DOMManager.renderAddTask(convert.clearHTML());
					}
				}
			});

		document
			.getElementById('task-date-input')
			.addEventListener('keypress', e => {
				if (e.keyCode == 13) {
					if (
						document.getElementById('isEditingTask').value == false
					) {
						dataManager.getTaskInput(false);
						DOMManager.renderAddTask(convert.clearHTML());
					} else {
						dataManager.getTaskInput(true);
						DOMManager.renderAddTask(convert.clearHTML());
					}
				}
			});
	},
	deleteTask(id) {
		document
			.getElementById(`delete--${id}`)
			.addEventListener('click', () => {
				apiManager.deleteTask(id).then(() => {
					convert.runIt();
				});
			});
	},
	editTask(id) {
		// document
		// 	.getElementById(`task-text--${id}`)
		// 	.addEventListener('click', () => {
		// 		DOMManager.renderSingleTask(id, convert.taskFormHTML());
		// 		apiManager.getSingleTask(id).then(data => {
					
		// 			DOMManager.populateTaskInput(data[0]);
		// 			this.submitTask(id);
		// 		});
		// 	});
	},
	taskItem(id) {
		document
			.getElementById(`check-task--${id}`)
			.addEventListener('click', () => {
				const taskId = event.target.id.split('--')[1];
				apiManager.checkTask(taskId).then(() => {
					convert.runIt();
				});
			});
	},
	openTask() {
		document
			.getElementById('sidebar-button')
			.addEventListener('click', () => {
				$( ".ui.sidebar" ).sidebar("show");
			});
	},
	closeTask(){
		document
			.getElementById('close-sidebar')
			.addEventListener('click', () => {
				$( ".ui.sidebar" ).sidebar("hide");
			});
	},
	sidebar(){
		document.getElementById("sidebar-menu").addEventListener("click", (event) => {
			if(!document.getElementById("task-input") && event.target.id.split("--")[0] == "task-text"){
				const id = event.target.id.split("--")[1];
				DOMManager.renderSingleTask(id, convert.taskFormHTML());
				apiManager.getSingleTask(id).then(data => {
					DOMManager.populateTaskInput(data[0]);
					this.submitTask(id);
				});
			}
		})
	}
};

export default eventListeners;
