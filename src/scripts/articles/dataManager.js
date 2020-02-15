import validate from './validate.js';
import apiManager from './apiManager.js';
import convert from './convert.js';
import DOMmanager from './DOMmanager.js';

const dataManager = {
	runIt() {},
	getUserInput(activeUserId, updating, id) {
		const url = document.getElementById('url-input').value;
		const title = document.getElementById('title-input').value;
		const description = document.getElementById('description-input').value;

		const inputObj = {
			userId: activeUserId,
			url: url,
			title: title,
			synopsis: description
		};

		const validatedArray = validate.createFormChecker(inputObj);

		const valid = validatedArray[0]
			? false
			: validatedArray[1]
			? false
			: true;
		if (valid && updating == 'add') {
			document.getElementById('modal').classList.add('hidden-item');
			apiManager.addUserNews(inputObj).then(() => {
				convert.runIt(activeUserId);
			});
		} else if (valid && updating == 'edit') {
            document.getElementById('modal').classList.add('hidden-item');
            apiManager.editUserNews(id, inputObj).then(() => {
				convert.runIt(activeUserId);
			});
		} else {
			alert('Input has Empty fields or fields with no text');
		}
	},
	getNewsInformation(btnId, activeUserId) {
		return apiManager
			.getSingleNews(btnId, activeUserId)
			.then(data => data[0]);
	}
};

export default dataManager;
