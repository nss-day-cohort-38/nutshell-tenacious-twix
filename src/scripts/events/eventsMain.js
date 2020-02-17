import eventsEventListenerManager from "./eventListeners.js";

const eventsMainManager = {
  eventNavButton: activeUsers => {
    eventsEventListenerManager.eventsNav(activeUsers);
  }
};

export default eventsMainManager;
