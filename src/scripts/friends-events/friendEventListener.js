import renderManager from '../renderManager.js';
import eventAPI from './friendEventsAPI.js';
import htmlManager from './friendEventsHtmlCreator.js';
let array = [];
const eventsEventListenerManager = {
	refreshEventContainer: activeUserId => {
		const container = document.getElementById('container');
		container.innerHTML = htmlManager.header();
		eventAPI.getFriends(activeUserId).then(friends => {
			friends.forEach(friend => {
				eventAPI.getEvents(friend.userId).then(data => {
					data.forEach(datum => array.push(datum));
					array.sort((a, b) => new Date(a.date) - new Date(b.date));
					renderManager.renderFriendEventsToContainer(
						array,
						htmlManager.eventsHtmlCreator
					);
					if (
						document.getElementById('friend-events')
							.childElementCount !== 0
					) {
						eventsEventListenerManager.signifyNextEvent();
					}
				});
			});
		});
	},
	signifyNextEvent: () => {
		let firstEvent = document.getElementById('friend-events')
			.firstElementChild;
		firstEvent.classList.add('first-event');
	}
};
export default eventsEventListenerManager;
