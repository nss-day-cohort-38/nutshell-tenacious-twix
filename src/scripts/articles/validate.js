/* Author: Trinity Terry */
/* Purpose: Validates inputs for article form */

const validate = {
	createFormChecker(formInputObj) {
		let checkForm = [];

		for (let prop in formInputObj) {
            const elementValue = formInputObj[prop];
            let boolean;
            let url;
			if (prop == 'url') {
                url = !this.isURL(elementValue);
			} else {
				boolean = !/\S/.test(elementValue);
			}
            const value = elementValue;
            
			checkForm.push({
				boolean: boolean,
                value: value,
                url: url
			});
		}

		let formHasSpaces = checkForm.some(element => element.boolean === true);
        let formIsEmpty = checkForm.some(element => element.value === '');
        let isNotURL = checkForm.some(element => element.url === true);

		return [formHasSpaces, formIsEmpty, isNotURL];
	},
	isURL(str) {
		var pattern = new RegExp(
			'^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
				'(\\#[-a-z\\d_]*)?$',
			'i'
		); // fragment locator
		return !!pattern.test(str);
	}
};

export default validate;
