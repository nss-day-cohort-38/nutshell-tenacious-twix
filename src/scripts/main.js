import article from './articles/main.js';
import kkMainManager from './friends/kkMain.js';
import tasks from './tasks/main.js'

sessionStorage.setItem("activeUsers", 1);
const activeUser = sessionStorage.getItem("activeUsers");

article.runIt();
tasks.runIt();
kkMainManager.kkRunIt(activeUser);
