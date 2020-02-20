/* Author: Trinity Terry */
/* Purpose: Runs initial functions for article page load */

import articleEvtManager from './eventListeners.js';
import convert from './convert.js';

const article = {
	runIt() {
		articleEvtManager.runIt();
		convert.runIt();
	}
};

export default article;

// TODO: Look at photo's duplicateding every other reload