import convert from './convert.js'
import dataManager from './dataManager.js'
import DOMManager from './DOMManager.js'
import eventListeners from './eventListeners.js'
import validate from './validate.js'

const apiManager = {
    runIt(){

    },
    getTasks(userId){
        return fetch(`http://localhost:8088/tasks?userId=${userId}&_sort=complete_on`)
        .then(resp => resp.json())
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
    getSingleTask(id){
        return fetch(`http://localhost:8088/tasks?id=${id}`)
        .then(resp => resp.json())
    },
    editTask(taskObj, id){
        return fetch(`http://localhost:8088/tasks/${id}`, {
			// Replace "url" with your API's URL
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(taskObj)
		});
    }
}

export default apiManager;