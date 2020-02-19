import validate from './validate.js';
import apiManager from './apiManager.js';
import convert from './convert.js';
import DOMmanager from './DOMmanager.js';

const dataManager = {
	runIt() {},
	getUserInput(updating, id) {
		const activeUserId = sessionStorage.getItem("activeUsers");
		let url = document.getElementById('news-url-input').value;
		const title = document.getElementById('news-title-input').value;
        const description = document.getElementById('news-description-input').value;
		
		if (!url.startsWith("http")){
			url = `https://${url}`;
		}

		const inputObj = {
			userId: activeUserId,
			url: url,
			title: title,
            synopsis: description,
		};


        

		const validatedArray = validate.createFormChecker(inputObj);

		const valid = validatedArray[0]
			? false
			: validatedArray[1]
			? false
			: validatedArray[2] ? false : true;
		if(!valid){
			const alertMessage = [];
			
			if (validatedArray[0]){
				alertMessage.push("A field contains only spaces")
			}

			if(validatedArray[1]){
				alertMessage.push("There is an empty field")

			}

			if(validatedArray[2]){

				alertMessage.push('An invalid url was inputted');
			}
			alert(alertMessage.join("\n"))

		} else if (valid && updating == 'add') {
			document.getElementById('news-modal').classList.add('hidden-item');
			apiManager.addUserNews(inputObj).then(() => {
				convert.runIt();
			});
		} else if (valid && updating == 'edit') {
            document.getElementById('news-modal').classList.add('hidden-item');
            apiManager.editUserNews(id, inputObj).then(() => {
				convert.runIt();
			});
		}
	},
	getNewsInformation(btnId) {
		return apiManager
			.getSingleNews(btnId)
			.then(data => data[0]);
	}
};

export default dataManager;
