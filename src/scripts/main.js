import article from './articles/main.js';
import kkMainManager from './friends/kkMain.js';
import tasks from './tasks/main.js'

const activeUsers = {
    "id": 1
}

article.runIt(activeUsers.id);
tasks.runIt();
kkMainManager.kkRunIt(activeUsers.id);
