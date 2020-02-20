/* Author: Trinity Terry */
/* Purpose: Handles all event listeners for Task Sidebar */

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
			this.discardTask();
		});
	},
	submitTask() {
		document
			.getElementById('task-text-input')
			.addEventListener('keypress', e => {
				if (e.keyCode == 13) {
					if (
						document.getElementById('isEditingTask').value == false
					) {
						dataManager.getTaskInput(false);
						
					} else {
						dataManager.getTaskInput(true);
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
					} else {
						dataManager.getTaskInput(true);
					}
				}
			});
	},
	deleteTask(id) {
		document
			.getElementById(`task-delete--${id}`)
			.addEventListener('click', () => {
				apiManager.deleteTask(id).then(() => {
					convert.runIt();
				});
			});
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
				$('.ui.sidebar').toggleClass('visible');
			});
	},
	closeTask() {
		document
			.getElementById('close-sidebar')
			.addEventListener('click', () => {
				$('.ui.sidebar').toggleClass('visible');
			});
	},
	sidebar() {
		document
			.getElementById('sidebar-menu')
			.addEventListener('click', event => {
				if (
					!document.getElementById('task-input') &&
					event.target.id.split('--')[0] == 'task-text'
				) {
					const id = event.target.id.split('--')[1];
					DOMManager.renderSingleTask(id, convert.taskFormHTML());
					apiManager.getSingleTask(id).then(data => {
						DOMManager.populateTaskInput(data[0]);
						this.submitTask(id);
					});
				}
			});
	},
	hoverOverTask() {
		
		$('.cal-icon')
			.popup()
;
	},
	discardTask(){
		document.getElementById("discard-task").addEventListener("click", () => {
			DOMManager.renderAddTask("");
		})
	}
};

export default eventListeners;
