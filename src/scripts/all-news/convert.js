/* Author: Trinity Terry */
/* Purpose: Creates html for friend article page */

import renderManager from '../renderManager.js'

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
        <div id="news-header">
			<h1>Friend's News</h1>
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
