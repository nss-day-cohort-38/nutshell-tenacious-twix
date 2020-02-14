const container = document.getElementById('container');

const renderManager = {
    renderNewPageToDom: (html) => {
    container.innerHTML= "";
     container.innerHTML= html;
    },
    renderSingleHtmlToContainer: (html, id) => {
        const element = document.getElementById(`${id}`);
        element.innerHTML+= html;
    },
    renderArrayOfHtmlToContainer: (arr,func, id) => {
        arr.forEach(item=> {
            const html = func(item);
            const output = document.getElementById(`${id}`)
            html.innerHTML+= output;
        })
    }
}

export default renderManager;