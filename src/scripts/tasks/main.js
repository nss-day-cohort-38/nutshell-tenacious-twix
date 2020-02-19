/* Author: Trinity Terry */
/* Purpose: Runs start up scripts for Task Sidebar*/

import convert from './convert.js'
import DOMManager from './DOMManager.js'
import eventListeners from './eventListeners.js'

// TODO 
const tasks = {
    runIt(){
        DOMManager.createOpenButton();
        DOMManager.createDivs();
        convert.runIt();
        eventListeners.openTask();
        eventListeners.sidebar();
        eventListeners.hoverOverTask();
    }
}


// Fix edit
// Add submit check

export default tasks;