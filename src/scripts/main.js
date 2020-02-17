import article from './articles/main.js';
import kkMainManager from './friends/kkMain.js';
import tasks from './tasks/main.js'

const activeUsers = {
    "id": 1
}

article.runIt(activeUsers.id);
kkMainManager.kkRunIt();
tasks.runIt();