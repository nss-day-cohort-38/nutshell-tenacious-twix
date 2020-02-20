/* Author: Trinity Terry */
/* Purpose: Renders elements to article page*/

import dataManager from './dataManager.js';

const DOMmanager = {
	runIt() {},
	clearInput() {
		document.getElementById('news-url-input').value = '';
		document.getElementById('news-title-input').value = '';
		document.getElementById('news-description-input').value = '';
	},
	populateEditForm(btnId) {
		dataManager.getNewsInformation(btnId).then(obj => {
            document.getElementById("news-url-input").value = obj.url;
            document.getElementById("news-title-input").value = obj.title;
            document.getElementById("news-description-input").value = obj.synopsis;
		});
	}
};

export default DOMmanager;
