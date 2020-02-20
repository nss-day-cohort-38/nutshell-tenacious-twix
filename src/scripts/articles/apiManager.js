const apiManager = {
	getUserNews(userId) {
		return fetch(
			`http://localhost:8088/news?userId=${userId}`
		).then(resp => resp.json());
	},
	getSiteUrl() {
		return fetch(`https://source.unsplash.com/collection/8833779/300x300`)
		
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
	},
	getSingleNews(id) {
		const activeUserId = sessionStorage.getItem("activeUsers");
		return fetch(
			`http://localhost:8088/news?userId=${activeUserId}&&id=${id}`
		).then(resp => resp.json());
	},
	editUserNews(id, newsObj) {
		return fetch(
			`http://localhost:8088/news/${id}`,
			{
				method: `PUT`,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newsObj)
			}
		);
	},
	getArticleAPI(){
		return fetch(`http://localhost:8088/apiKeys/1`)
		.then(resp => resp.json());
	}
};

export default apiManager;
