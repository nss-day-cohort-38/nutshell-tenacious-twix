import convert from './convert.js'
import dataManager from './dataManager.js'
import DOMManager from './DOMManager.js'
import eventListeners from './eventListeners.js'
import validate from './validate.js'

const apiManager = {
    runIt(){

    },
    getTasks(){
        return fetch("http://localhost:8088/tasks?userId=1&_sort=complete_on")
        .then(resp => resp.json())
    }
}

export default apiManager;