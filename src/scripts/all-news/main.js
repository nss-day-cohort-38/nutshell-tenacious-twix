import apiManager from './apiManager.js';
import newsApi from '../articles/apiManager.js';
import newsConvert from '../articles/convert.js';
import convert from './convert.js';
import friendApi from '../friends/kkApiManager.js';
const allNews = {
	runIt() {
		convert.runIt();
		apiManager
			.getFriends()
			.then(data => {
				let friendArray;
				const promises = data.map(item => {
					if (!item.nickName || item.nickName == '') {
						return friendApi
							.getUser(item.userId)
							.then(data => [data[0].id, data[0].username]);
					} else {
						return [item.userId, item.nickName];
					}
				});

				Promise.all(promises).then((results) => {
					friendArray = results;
					newsConvert.newsCardHTML(
						friendArray,
						document.getElementById('allNews-container')
					);
				});

			})
			// .then(friends => {
			// 	console.log(friends);
			// 	if (friends[0] !== undefined) {
					
			// 	}
			// });
	}
};

export default allNews;

// TODO: Look at photo's duplicateding every other reload
