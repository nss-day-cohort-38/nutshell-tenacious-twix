import apiManager from './apiManager.js';
import renderManager from '../renderManager.js';
import article from './main.js';
import eventListeners from './eventListeners.js';

const convert = {
	runIt(activeUserId) {
		renderManager.renderNewPageToDom(`<div id="article-container"></div>`);
		const articleContainer = document.getElementById('article-container');
		this.articleSections(articleContainer);
		this.newsCardHTML(activeUserId);
		this.newsHeaderHTML();
		this.modalHTML();
		document.getElementById('modal').classList.add('hidden-item');
        eventListeners.addArticleEvt(activeUserId);
        eventListeners.discardArticleEvt(activeUserId);

		eventListeners.openAddArticleEvt();
	},
	articleSections(articleContainer) {
		articleContainer.innerHTML = `
        <div id="modal"></div>
        <button id="open-add-news">Add News</button>
        <div id="news-header"></div>
        <div id="news-card-container"></div>
        `;
	},
	newsCardHTML(activeUserId) {
		apiManager.getUserNews(activeUserId).then(data => {
			data.forEach(element => {
				const id = element.id;
				const url = element.url;
				const title = element.title;
				const synopsis = element.synopsis;
				const cardContainer = document.getElementById(
					'news-card-container'
				);
				let cardImg =
					'https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg';

				cardContainer.innerHTML += `
                    <div class="news-card">
                        <div class="newsFeed-img-container">
                            <img class="newsFeed-img" src="${cardImg}"></img>
                        </div>
                        <div class="news-card-text-container">
                            <p>${title}</p>
                            <p>${synopsis}</p>
                            <a href="${url}">Link Here</a>
                        </div>
                        <button id="delete--${id}">Delete</button>
                        <button id="edit--${id}">Edit</button>
                    </div>
                    `;
			});

			data.forEach(element => {
				eventListeners.deleteArticleEvt(element.id, activeUserId);
				eventListeners.editArticleEvt(element.id, activeUserId);
			});
		});
	},
	newsHeaderHTML() {
		document.getElementById('news-header').innerHTML = '<h1>News Feed</h1>';
	},

	modalHTML() {
		document.getElementById('modal').innerHTML = `
        <div class="modal-card">
            <div class="modal-card-text-container">
                <div id="news-form">
                    <input id="url-input" type="text" placeholder="Type Url">
                    <input id="title-input" type="text" placeholder="Type Title">
                    <textarea id="description-input" type="text" col="2000" row="3000" placeholder="Description"></textarea>
                </div>
                <div><button id="add-article">Add Article</button></div>
                <div><button id="discard-article">Discard Article</button></div>

            </div>
        </div>
        `;
	}
};

export default convert;