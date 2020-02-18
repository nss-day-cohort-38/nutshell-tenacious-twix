import article from './articles/main.js';
import kkMainManager from './friends/kkMain.js';
import tasks from './tasks/main.js'

sessionStorage.setItem(`activeUsers`, 1);


article.runIt(sessionStorage.getItem(`activeUsers`));
kkMainManager.kkRunIt()
tasks.runIt();

