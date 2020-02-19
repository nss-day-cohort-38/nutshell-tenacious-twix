import renderManager from '../renderManager.js'
import articleConvert from "../articles/convert.js"

const convert = {
	runIt(){
		renderManager.renderNewPageToDom(`<div id="allNews-container"></div>`);
		const allnewsContainer = document.getElementById('allNews-container');
		this.allNewsSections(allnewsContainer);
		const containerNode = document.getElementById("allnews-card-container");
		containerNode.innerHTML = "";

	},
	allNewsSections(articleContainer) {
		articleContainer.innerHTML = `
        <button id="open-add-news">Add News</button>
        <div id="news-header">
			<div class="ui text loader">Loading</div>
		  </div>
		<div id="allnews-card-container">
			<div class="ui active dimmer">
				<div class="ui text loader">Loading</div>
	  		</div>
	  	</div>
        `;
	}
};

export default convert;
