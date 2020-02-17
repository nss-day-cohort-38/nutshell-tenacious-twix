const apiManager = {
	getUserNews(activeUserId) {
		return fetch(
			`http://localhost:8088/news?userId=${activeUserId}`
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
	getSingleNews(id, activeUserId) {
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
	}
};

export default apiManager;
