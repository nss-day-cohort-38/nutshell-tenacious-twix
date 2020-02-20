import renderManager from "../renderManager.js";
import eventAPI from "./friendEventsAPI.js";
import htmlManager from "./friendEventsHtmlCreator.js";

let array = [];

const eventsEventListenerManager = {
  refreshEventContainer: activeUserId => {
    eventAPI.getFriends(activeUserId).then(friends => {
      console.log(friends);
      friends.forEach(friend => {
        console.log("2");
        eventAPI.getEvents(friend.userId).then(data => {
          console.log("3");
          data.forEach(datum => array.push(datum));
          array.sort((a, b) => new Date(a.date) - new Date(b.date));
          console.log("array", array);
        });
      });
    });
  },

  signifyNextEvent: () => {
    let firstEvent = document.getElementById("container").firstElementChild;
    firstEvent.classList.add("first-event");
  }
};

export default eventsEventListenerManager;

// if (document.getElementById("container").childElementCount !== 0) {
//   eventsEventListenerManager.signifyNextEvent();
// }
