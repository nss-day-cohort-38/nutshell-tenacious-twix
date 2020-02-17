import article from './articles/main.js';
import kkMainManager from './friends/kkMain.js';
import eventsMainManager from "./events/eventsMain.js";

const activeUsers = {
    "id": 1
}

article.runIt(activeUsers.id);
kkMainManager.kkRunIt();
eventsMainManager.eventNavButton(activeUsers.id);