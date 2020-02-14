const apiManager = {
	getUserNews(activeUserId) {
		return fetch(
			`http://localhost:8088/news?userId=${activeUserId}`
		).then(resp => resp.json());
	},
	getSiteUrl(url) {
		return fetch(
			`http://api.linkpreview.net/?key=&q=${url}`
		).then(resp => resp.json());
	},
	addUserNews(newsObj) {
		return fetch('http://localhost:8088/news', {
			// Replace "url" with your API's URL
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newsObj)
		});
	},
	deleteUserNews(id) {
		return fetch(`http://localhost:8088/news/${id}`, {
			// Replace "url" with your API's URL
			method: 'DELETE'
		});
	}
};

export default apiManager;
