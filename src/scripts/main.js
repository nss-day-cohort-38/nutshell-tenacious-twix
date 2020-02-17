import article from './articles/main.js';
import kkMainManager from './friends/kkMain.js';

const activeUsers = {
    "id": 1
}

article.runIt(activeUsers.id);
kkMainManager.kkRunIt(activeUsers.id);
