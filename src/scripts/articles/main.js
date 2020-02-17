import articleEvtManager from './eventListeners.js';
import convert from './convert.js';

const article = {
	runIt(activeuserId) {
		articleEvtManager.runIt(activeuserId);
		convert.runIt(activeuserId);
	}
};

export default article;

// TODO: Look at photo's duplicateding every other reload