/* Author: Trinity Terry */
/* Purpose: Fetches Data from JSON file for task sidebar */

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
