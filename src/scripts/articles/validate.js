const validate = {
    createFormChecker(formInputObj) {
        let checkForm = [];

        for (let prop in formInputObj){
            const elementValue = formInputObj[prop];
            const boolean = !(/\S/.test(elementValue));
            const value = elementValue;
            
            checkForm.push({
                boolean: boolean,
                value: value
            });
        }

        
        let formHasSpaces = checkForm.some(element => element.boolean === true);
        let formIsEmpty = checkForm.some(element => element.value === "");
        
        return [formHasSpaces, formIsEmpty];
    }
};

export default validate;