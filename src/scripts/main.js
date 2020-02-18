import article from "./articles/main.js";
import kkMainManager from "./friends/kkMain.js";
import eventsMainManager from "./events/eventsMain.js";
import {testA, testB, testC} from "./events/eventListeners.js"



testA();
testB();
testC();

// sessionStorage.setItem(`activeUsers`, 1);

// article.runIt(sessionStorage.getItem(`activeUsers`));
// eventsMainManager.eventNavButton(sessionStorage.getItem(`activeUsers`));
// kkMainManager.kkRunIt(sessionStorage.getItem(`activeUsers`));
