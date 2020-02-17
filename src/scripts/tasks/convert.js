import apiManager from './apiManager.js';
import dataManager from './dataManager.js';
import DOMManager from './DOMManager.js';
import eventListeners from './eventListeners.js';
import validate from './validate.js';

const convert = {
	runIt() {
		this.sideBarHTML().then(html => {
            DOMManager.renderMenuItems(html);

            DOMManager.renderMenuTop(this.sideBarTop())
			$('.ui.sidebar').sidebar('toggle');
		});
	},
	sideBarHTML() {
		return apiManager.getTasks().then(data => {
			let taskHTML = '';

			data.forEach(element => {
				taskHTML += `<a class="item" id="task--${element.id}">${element.task_text}</a>`;
			});

			return taskHTML;
		});
	},
	sideBarTop() {
        return `
            <button class="sidebar-top-item" id="add-task">Add Task</button>
            <button class="sidebar-top-item" id="check-all">Check All</button>
            <button class="sidebar-top-item" id="uncheck-all">Uncheck All</button>

        `;
	}
};

export default convert;
