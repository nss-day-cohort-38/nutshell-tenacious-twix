import convert from './convert.js';
import dataManager from './dataManager.js';
import DOMManager from './DOMManager.js';
import eventListeners from './eventListeners.js';
import validate from './validate.js';

const apiManager = {
	runIt() {},
	getTasks() {
        const activeUserId = sessionStorage.getItem("activeUsers");
		return fetch(
			`http://localhost:8088/tasks?userId=${activeUserId}&_sort=complete_on`
		).then(resp => resp.json());
	},
	addtask(taskObj) {
		return fetch('http://localhost:8088/tasks', {
			// Replace "url" with your API's URL
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(taskObj)
		});
	},
	deleteTask(id) {
		return fetch(`http://localhost:8088/tasks/${id}`, {
			// Replace "url" with your API's URL
			method: 'DELETE'
		});
	},
	getSingleTask(id) {
		return fetch(`http://localhost:8088/tasks?id=${id}`).then(resp =>
			resp.json()
		);
	},
	editTask(taskObj, id) {
		return fetch(`http://localhost:8088/tasks/${id}`, {
			// Replace "url" with your API's URL
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(taskObj)
		});
	},
	checkTask(id) {
		return this.getSingleTask(id)
			.then(data => {
                // console.log(data)
				return data[0].done ? false : true;
			})
			.then(done => {
				return fetch(`http://localhost:8088/tasks/${id}`, {
					// Replace "url" with your API's URL
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({done: done})
				});
			});
	}
};

export default apiManager;
