/* Author: Trinity Terry */
/* Purpose: Converts data to html for article page */

import apiManager from './apiManager.js';
import renderManager from '../renderManager.js';
import eventListeners from './eventListeners.js';

const convert = {
	runIt() {
		const activeUserId = sessionStorage.getItem('activeUsers');
		renderManager.renderNewPageToDom(`<div id="article-container"></div>`);
		const articleContainer = document.getElementById('article-container');
		this.articleSections(articleContainer);
		const containerNode = document.getElementById('news-card-container');
		containerNode.innerHTML = '';
		this.newsCardHTML(activeUserId, containerNode);
		this.newsHeaderHTML();
		this.modalHTML();
		document.getElementById('news-modal').classList.add('hidden-item');
		eventListeners.openAddArticleEvt();
	},
	articleSections(articleContainer) {
		articleContainer.innerHTML = `
		<div id="news-modal"></div>

		<div id="open-add-news" class="ui blue button">
		<i class="plus icon"></i>
			Add Article 
		</div>
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
	newsCardHTML(userId, containerNode, name) {
		
		let sorted;
		if (typeof userId == 'object') {
			const promiseArray = userId.map(element => 
				apiManager.getUserNews(element[0])
			);

			sorted = Promise.all(promiseArray).then(resp => {
				const messageArray = [];
				resp.forEach(element => {
					element.forEach(news => {
						messageArray.push(news);
					});
				});

				const sortedData = messageArray.sort(function(a, b) {
					return b.id - a.id;
				});

				return sortedData;
			});
		} else {
			
			const promiseArray = apiManager.getUserNews(userId).then(data => {
				const sortedData = data.sort(function(a, b) {
					return b.id - a.id;
				});

				return sortedData;
			});

			sorted = Promise.all([promiseArray])
				.then(resp => {
					const messageArray = [];
					resp.forEach(element => {
						element.forEach(news => {
							messageArray.push(news);
						});
					});
					return messageArray;
				})
				.then(data => data);
		}

		const cardContainer = containerNode;

		sorted
			.then(sortedData => {
				sortedData.forEach(element => {
					if (typeof userId == 'object') {
						userId.forEach(user => {
							if (user[0] == element.userId) {
								name = user[1];
							}
						});
					}

					const id = element.id;
					let url = element.url;

					const title = element.title;
					const synopsis = element.synopsis;

					containerNode.innerHTML += `
				<div class="news-card">
					<div class="newsFeed-img-container">
					
						<img class="newsFeed-img" id="newsFeed-img--${id}" src="scripts/articles/spinner.svg" alt="spinner"></img>
					</div>
					<div class="news-card-text-container">
					<p class="news-title">${title}</p>
					<div id="creator-name--${id}" class="creator-name"></div>
					<p class="news-description">${synopsis}</p>
					<a href="${url}" target="_blank" class="news-link">Link Here</a>
					</div>
					<div class="card-buttons" id="card-buttons-${id}">
					
					</div>
				</div>
				`;
					if (name !== undefined) {
						console.log(name)
						document.getElementById(
							`creator-name--${id}`
						).innerText = `Added By: ${name}`;
					} else {
						document.getElementById(
							`card-buttons-${id}`
						).innerHTML = `
						<button id="news-delete--${id}"><i class="trash alternate icon"></i></button>
						<button id="news-edit--${id}"><i class="edit icon"></i></button>
						`;
					}
				});

				return sortedData;
			})
			.then(data => {
				data.forEach(element => {
					apiManager
						.getSiteUrl('8833779/300x300')
						.then(img => {
							const cardImg = img.url;
							document.getElementById(
								`newsFeed-img--${element.id}`
							).src = cardImg;
						})
						.then(() => {
							if (name == undefined) {
								eventListeners.deleteArticleEvt(element.id);
								eventListeners.editArticleEvt(element.id);
							}
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
                    <textarea id="news-description-input" type="text" maxlength = "300" col="2000" row="3000" placeholder="Description"></textarea>
                </div>
                <div id="news-modal-btn-container">
                </div>

            </div>
        </div>
		`;

		eventListeners.textareaText();
	}
};

export default convert;
