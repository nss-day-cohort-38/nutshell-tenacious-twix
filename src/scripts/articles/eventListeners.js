import convert from './convert.js';
import dataManager from './dataManager.js';
import apiManager from './apiManager.js';
import DOMManager from './DOMmanager.js';

const eventManager = {
	runIt(activeUserId) {
		this.articleLinkEvt(activeUserId);
	},
	articleLinkEvt(activeUserId) {
		document.getElementById('Home').addEventListener('click', () => {
			convert.runIt(activeUserId);
		});
	},
	addArticleEvt(activeUserId) {
		document.getElementById('add-article').addEventListener('click', () => {
			dataManager.getUserInput(activeUserId, "add");
		});
	},
	openAddArticleEvt(activeUserId) {
		document
			.getElementById('open-add-news')
			.addEventListener('click', () => {
                document.getElementById("modal-btn-container").innerHTML = `
                <button id="add-article">Add Article</button>
                <button id="discard-article">Discard Article</button>
                `
                this.addArticleEvt(activeUserId);
                this.discardArticleEvt(activeUserId);
				DOMManager.clearInput();
				document
					.getElementById('modal')
					.classList.remove('hidden-item');
			});
	},
	deleteArticleEvt(btnId, activeUserId) {
		document
			.getElementById(`delete--${btnId}`)
			.addEventListener('click', () => {
				apiManager.deleteUserNews(btnId).then(() => {
					convert.runIt(activeUserId);
				});
				// console.log('clicked delete', btnId);
			});
	},
	editArticleEvt(btnId, activeUserId) {
		document
			.getElementById(`edit--${btnId}`)
			.addEventListener('click', () => {
                document.getElementById("modal-btn-container").innerHTML = `
                <button id="edit-article">Edit Article</button>
                <button id="discard-article">Discard Article</button>
                `
                this.submitEditArticleEvt(activeUserId, btnId);
                this.discardArticleEvt(activeUserId);
				document
					.getElementById('modal')
					.classList.remove('hidden-item');
				DOMManager.populateEditForm(btnId, activeUserId);
			});
	},
	discardArticleEvt() {
		document
			.getElementById('discard-article')
			.addEventListener('click', () => {
				document.getElementById('modal').classList.add('hidden-item');
				DOMManager.clearInput();
			});
    },
    submitEditArticleEvt(activeUserId, id) {
		document.getElementById('edit-article').addEventListener('click', () => {
            dataManager.getUserInput(activeUserId, "edit", id);
            // console.log(userInpu)
		});
	},
};

export default eventManager;
