import apiManager from './apiManager.js';
import dataManager from './dataManager.js';
import DOMManager from './DOMManager.js';
import eventListeners from './eventListeners.js';
import validate from './validate.js';

const convert = {
	runIt() {
        const sidebarHTML = this.sideBarHTML();
		DOMManager.renderMenuItems(sidebarHTML);
		$('.ui.sidebar').sidebar('toggle');
	},
	sideBarHTML() {

		return `<a class="item">Test Item</a>`
        ;
    },
    sideBarTop(){
        return `
            <button>here</button>
        `
    }
};

export default convert;
