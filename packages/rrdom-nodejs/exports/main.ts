import {
	polyfillDocument,
	polyfillEvent,
	polyfillNode,
	polyfillPerformance,
	polyfillRAF,
} from '../utils/polyfill';
polyfillPerformance();
polyfillRAF();
polyfillEvent();
polyfillNode();
polyfillDocument();
export * from '../utils/document-nodejs';
