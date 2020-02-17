import eventsEventListenerManager from "./eventListeners.js";

const eventsMainManager = {
  eventNavButton: activeUser => {
    eventsEventListenerManager.eventsNav(activeUser);
  }
};

export default eventsMainManager;
