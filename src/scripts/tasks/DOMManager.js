import apiManager from './apiManager.js'
import convert from './convert.js'
import dataManager from './dataManager.js'
import eventListeners from './eventListeners.js'
import validate from './validate.js'

const DOMManager = {
    runIt(){
        this.createDivs();
    },
    renderMenuItems(sidebarHTML){
        console.log(sidebarHTML)
        document.getElementById("sidebar-items").innerHTML = sidebarHTML;
    },
    createDivs(){
        document.getElementById("sidebar-menu").innerHTML = `
            <div id="sidebar-top"></div>
            <div id="sidebar-items"></div>
            <div id="add-task-form"></div>
        `;
    },
    renderMenuTop(topHTML){
        document.getElementById("sidebar-top").innerHTML = topHTML;
    },
    renderAddTask(taskFormHTML){
        document.getElementById("ass-task-forn").innerHTML = taskFormHTML;
    }


}

export default DOMManager;