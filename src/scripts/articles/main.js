import articleEvtManager from "./eventListeners.js";
import renderManager from '../renderManager.js';
import convert from './convert.js';

const article = {
    runIt(activeuserId){

        articleEvtManager.runIt(activeuserId);
        convert.runIt(activeuserId);

    }
}

export default article;

// TODO: Edit News
    // TODO: create edit modal
// TODO: Hide modal

// TODO: Clear inputs
// TODO: style modal
