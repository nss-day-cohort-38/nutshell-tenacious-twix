import apiManager from './apiManager.js';
import newsApi from '../articles/apiManager.js';
import newsConvert from "../articles/convert.js";
import convert from './convert.js'
const allNews = {
	runIt() {
		convert.runIt();
		apiManager
			.getFriends()
			.then(data => data.map(item => [item.userId, item.nickName]))
			.then(friends => {
				
				// newsConvert.newsCardHTML(friends, document.getElementById("allNews-container"), friend[1])
				// const friendId = friends.map(friend => friend[0]);

				newsConvert.newsCardHTML(friends, document.getElementById("allNews-container"));
			})
			// .then(data => console.log(data));
	}
};

export default allNews;

// TODO: Look at photo's duplicateding every other reload
