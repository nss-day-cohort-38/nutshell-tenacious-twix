import validate from './validate.js'
import apiManager from './apiManager.js';
import convert from './convert.js'

const dataManager = {
	runIt() {},
	getUserInput(activeUserId) {
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

        const valid = validatedArray[0] ? false : validatedArray[1] ? false : true;
        if(valid){
            document.getElementById("modal").classList.add("hidden-item")
            apiManager.addUserNews(inputObj)
            .then(() => {
                convert.runIt(activeUserId);
            });
        } else {
            alert("Input has Empty fields or fields with no text")
        }
	}
};

export default dataManager;
