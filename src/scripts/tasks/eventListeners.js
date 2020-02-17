import apiManager from './apiManager.js';
import convert from './convert.js';
import dataManager from './dataManager.js';
import DOMManager from './DOMManager.js';
import validate from './validate.js';

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
						dataManager.getTaskInput(
							JSON.parse(
								document
									.getElementById('task-done-input')
									.value.toLowerCase()
							),
							id
						);
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
						dataManager.getTaskInput(
							JSON.parse(
								document
									.getElementById('task-done-input')
									.value.toLowerCase()
							),
							id
						);
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
		document
			.getElementById(`edit-task--${id}`)
			.addEventListener('click', () => {
				DOMManager.renderSingleTask(id, convert.taskFormHTML());
				apiManager.getSingleTask(id).then(data => {
					DOMManager.populateTaskInput(data[0]);
					this.submitTask(id);
				});
			});
	},
	taskItem(id) {
		document
			.getElementById(`task-text--${id}`)
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
				$('.ui.sidebar').sidebar('toggle');
			});
	}
};

export default eventListeners;
