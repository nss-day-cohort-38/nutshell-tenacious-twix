import dataManager from './dataManager.js';

const DOMmanager = {
	runIt() {},
	clearInput() {
		document.getElementById('url-input').value = '';
		document.getElementById('title-input').value = '';
		document.getElementById('description-input').value = '';
	},
	populateEditForm(btnId) {
		dataManager.getNewsInformation(btnId).then(obj => {
            document.getElementById("url-input").value = obj.url;
            document.getElementById("title-input").value = obj.title;
            document.getElementById("description-input").value = obj.synopsis;
		});
	}
};

export default DOMmanager;
