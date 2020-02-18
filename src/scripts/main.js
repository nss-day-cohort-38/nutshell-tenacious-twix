import article from './articles/main.js';
import kkMainManager from './friends/kkMain.js';

sessionStorage.setItem(`activeUsers`, 1);


article.runIt(sessionStorage.getItem(`activeUsers`));
kkMainManager.kkRunIt()
