import apiManager from './apiManager.js';
import renderManager from '../renderManager.js';
import eventListeners from './eventListeners.js';

const convert = {
	runIt() {
		const activeUserId = sessionStorage.getItem("activeUsers");
		renderManager.renderNewPageToDom(`<div id="article-container"></div>`);
		const articleContainer = document.getElementById('article-container');
		this.articleSections(articleContainer);
		this.newsCardHTML();
		this.newsHeaderHTML();
		this.modalHTML();
		document.getElementById('news-modal').classList.add('hidden-item');
		eventListeners.openAddArticleEvt();
	},
	articleSections(articleContainer) {
		articleContainer.innerHTML = `
        <div id="news-modal"></div>
        <button id="open-add-news">Add News</button>
        <div id="news-header">
			<div class="ui text loader">Loading</div>
	  	</div>
		<div id="news-card-container">
			<div class="ui active dimmer">
				<div class="ui text loader">Loading</div>
	  		</div>
	  	</div>
        `;
	},
	newsCardHTML() {
		
		apiManager
			.getUserNews()
			.then(data => {

				const sortedData = data.sort(function(a, b) {
					return b.id - a.id
				})

				return sortedData;

			}).then(sortedData => {
				const cardContainer = document.getElementById(
					'news-card-container'
				);
				cardContainer.innerHTML = "";
				sortedData.forEach(element => {
					const id = element.id;
					let url = element.url;

					const title = element.title;
					const synopsis = element.synopsis;
					

					cardContainer.innerHTML += `
                    <div class="news-card">
                        <div class="newsFeed-img-container">
                        
                            <img class="newsFeed-img" id="newsFeed-img--${id}" src="scripts/articles/spinner.svg" alt="spinner"></img>
                        </div>
                        <div class="news-card-text-container">
                            <p>${title}</p>
                            <p>${synopsis}</p>
                            <a href="${url}" target="_blank">Link Here</a>
                        </div>
                        <div class="card-buttons">
                        <button id="news-delete--${id}"><i class="trash alternate icon"></i></button>
                        <button id="news-edit--${id}"><i class="edit icon"></i></button>
                        </div>
                    </div>
                    `;
				});

				return sortedData;
			})
			.then(data => {
				data.forEach(element => {
					apiManager
						.getSiteUrl()
						.then(img => {
							const cardImg = img.url;
							document.getElementById(
								`newsFeed-img--${element.id}`
							).src = cardImg;
						})
						.then(() => {
							eventListeners.deleteArticleEvt(
								element.id,
								
							);
							eventListeners.editArticleEvt(
								element.id,
								
							);
						});
				});
			});
	},
	newsHeaderHTML() {
		document.getElementById('news-header').innerHTML = '<h1>News Feed</h1>';
	},

	modalHTML() {
		document.getElementById('news-modal').innerHTML = `
        <div class="news-modal-card">
            <div class="news-modal-card-text-container">
                <div id="news-form">
                
                    <input id="news-url-input" type="text" placeholder="Type Url">
                    <input id="news-title-input" type="text" placeholder="Type Title">
                    <textarea id="news-description-input" type="text" col="2000" row="3000" placeholder="Description"></textarea>
                </div>
                <div id="news-modal-btn-container">
                </div>

            </div>
        </div>
        `;
	}
};

export default convert;
