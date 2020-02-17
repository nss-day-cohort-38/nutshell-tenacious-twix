import article from './articles/main.js';
import kkMainManager from './friends/kkMain.js';
import eventsMainManager from "./events/eventsMain.js";

const activeUsers = {
    "id": 1
}

article.runIt(activeUsers.id);
eventsMainManager.eventNavButton(activeUsers.id);
kkMainManager.kkRunIt(activeUsers.id);
