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
        // const elephant = document.querySelector('input[type="file"]').files[0];
        // document.createElement("img").classList.add("hidden-item")
        // const imgCanvas = document.createElement("canvas");
        // const imgContext = imgCanvas.getContext("2d");

        // imgCanvas.width = elephant.width;
        // imgCanvas.height = elephant.height;
        // imgContext.drawImage(elephant, 0, 0, elephant.width, elephant.height);
        // const imgAsDataURL = imgCanvas.toDataURL("image/png");
        // // const imgURL = toDataURL()
        // try {
        //     localStorage.setItem("elephant", imgAsDataURL);
        //     console.log(localStorage.getItem("elephant"));
        // }
        // catch (e) {
        //     console.log("Storage failed: " + e);
        // }
        // console.log(imgURL)
		const inputObj = {
			userId: activeUserId,
			url: url,
			title: title,
            synopsis: description,
            img: ""
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
