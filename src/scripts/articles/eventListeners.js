import convert from './convert.js';
import dataManager from './dataManager.js';
import apiManager from './apiManager.js';

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
			const userInput = dataManager.getUserInput(activeUserId);
		});
	},
	openAddArticleEvt() {
		document
			.getElementById('open-add-news')
			.addEventListener('click', () => {
				document
					.getElementById('modal')
					.classList.remove('hidden-item');
			});
	},
	deleteArticleEvt(btnId, activeUserId) {
        document
			.getElementById(`delete--${btnId}`)
			.addEventListener('click', () => {
                apiManager.deleteUserNews(btnId)
                .then(() => {
                    convert.runIt(activeUserId)
                })
				// console.log('clicked delete', btnId);
			});
	},
	editArticleEvt(btnId, activeUserId) {
		console.log(btnId);

		document
			.getElementById(`edit--${btnId}`)
			.addEventListener('click', () => {
				console.log('clicked edit', btnId);
			});
    },
    discardArticleEvt(){
        document.getElementById("discard-article").addEventListener("click", () => {
            document.getElementById("modal").classList.add("hidden-item")

        })
    }
};

export default eventManager;
