/* Author: Trinity Terry */
/* Purpose: handle event listlers for article page */
import convert from './convert.js';
import dataManager from './dataManager.js';
import apiManager from './apiManager.js';
import DOMManager from './DOMmanager.js';

const eventManager = {
	runIt() {},
	addArticleEvt() {
		const activeUserId = sessionStorage.getItem('activeUsers');
		document.getElementById('add-article').addEventListener('click', () => {
			dataManager.getUserInput('add');
		});
	},
	openAddArticleEvt() {
		document
			.getElementById('open-add-news')
			.addEventListener('click', () => {
				document.getElementById(
					'news-modal-btn-container'
				).innerHTML = `
                <button id="add-article">Add Article</button>
                <button id="discard-article">Discard Article</button>
                `;
				this.addArticleEvt();
				this.discardArticleEvt();
				DOMManager.clearInput();
				document
					.getElementById('news-modal')
					.classList.remove('hidden-item');
			});
	},
	deleteArticleEvt(btnId) {
		const activeUserId = sessionStorage.getItem('activeUsers');
		document
			.getElementById(`news-delete--${btnId}`)
			.addEventListener('click', () => {
				apiManager.deleteUserNews(btnId).then(() => {
					convert.runIt();
				});
			});
	},
	editArticleEvt(btnId) {
		const activeUserId = sessionStorage.getItem('activeUsers');
		document
			.getElementById(`news-edit--${btnId}`)
			.addEventListener('click', () => {
				document.getElementById(
					'news-modal-btn-container'
				).innerHTML = `
                <button id="edit-article">Edit Article</button>
                <button id="discard-article">Discard Article</button>
                `;
				this.submitEditArticleEvt(btnId);
				this.discardArticleEvt();
				document
					.getElementById('news-modal')
					.classList.remove('hidden-item');
				DOMManager.populateEditForm(btnId);
			});
	},
	discardArticleEvt() {
		document
			.getElementById('discard-article')
			.addEventListener('click', () => {
				document
					.getElementById('news-modal')
					.classList.add('hidden-item');
				DOMManager.clearInput();
			});
	},
	submitEditArticleEvt(id) {
		document
			.getElementById('edit-article')
			.addEventListener('click', () => {
				dataManager.getUserInput('edit', id);
			});
	},
	textareaText() {
		const description = document.getElementById(`news-description-input`);
		description.addEventListener('keyup', () => {
				if(description.value.length == 300){
					alert("Maximum characters is 300")
				}
			});
	}
};

export default eventManager;
