import article from './articles/main.js';
import kkMainManager from './friends/kkMain.js';
import tasks from './tasks/main.js'

<<<<<<< HEAD
sessionStorage.setItem("activeUsers", 1);
const activeUser = sessionStorage.getItem("activeUsers");

article.runIt();
tasks.runIt();
kkMainManager.kkRunIt(activeUser);
=======
sessionStorage.setItem(`activeUsers`, 1);


article.runIt(sessionStorage.getItem(`activeUsers`));
kkMainManager.kkRunIt()
>>>>>>> master
