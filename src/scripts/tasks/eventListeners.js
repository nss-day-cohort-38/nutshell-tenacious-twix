import apiManager from './apiManager.js'
import convert from './convert.js'
import dataManager from './dataManager.js'
import DOMManager from './DOMManager.js'
import validate from './validate.js'

const eventListeners = {
    runIt(){

    },
    addTask(activeUsers){
        document.getElementById("add-task").addEventListener("click", () => {
            DOMManager.renderAddTask(convert.taskFormHTML());
            this.submitTask(activeUsers);
            
        })
    },
    submitTask(activeUsers, id){
        document.getElementById("task-text-input").addEventListener("keypress", (e) => {
            if(e.keyCode == 13){
                if(document.getElementById("isEditingTask").value == false){
                    dataManager.getTaskInput(activeUsers, false);
                    DOMManager.renderAddTask(convert.clearHTML());
                    convert.runIt(activeUsers);
                } else {
                    dataManager.getTaskInput(activeUsers, document.getElementById("task-done-input").value, id);
                    DOMManager.renderAddTask(convert.clearHTML());
                    
                }
            }
        });
        
        document.getElementById("task-date-input").addEventListener("keypress", (e) => {
            if(e.keyCode == 13){
                if(document.getElementById("isEditingTask").value == false){
                    dataManager.getTaskInput(activeUsers, false);
                    DOMManager.renderAddTask(convert.clearHTML());
                    convert.runIt(activeUsers);
                } else {
                    dataManager.getTaskInput(activeUsers, document.getElementById("task-done-input").value, id);
                    DOMManager.renderAddTask(convert.clearHTML());
                    
                }
            }
        });
    },
    deleteTask(id, activeUsers){
        document.getElementById(`delete--${id}`).addEventListener("click", () => {
            apiManager.deleteTask(id)
            .then(() => {
                convert.runIt(activeUsers);
            })
        })
    },
    editTask(id, activeUsers){
        document.getElementById(`edit-task--${id}`).addEventListener("click", () => {
            DOMManager.renderSingleTask(id, convert.taskFormHTML());
            apiManager.getSingleTask(id)
            .then(data => {
                DOMManager.populateTaskInput(data[0]);
                this.submitTask(activeUsers, id);
            });
        });
    },
    taskItem(id, activeUsers){
        document.getElementById(`task--${id}`).addEventListener("click", () => {
            const task = document.getElementById(`task-text--${id}`);
            const taskId = event.target.id.split("--")[1];
            const taskText = document.getElementById(`task-text--${taskId}`).innerText;
            task.innerHTML = `<b id="completed-task--${taskId}">${taskText}</b>`;
            // this.taskItem(taskId.split("--")[1], activeUsers)
        })
    }
}

export default eventListeners;
