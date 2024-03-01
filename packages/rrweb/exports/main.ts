import record from '../record/index.js';
import { Replayer } from '../replay/index.js';
import canvasMutation from '../replay/canvas/index.js';
import { _mirror } from '../utils/_.js';
import * as utils from '../utils/_.js';

export {
	EventType,
	type eventWithTime,
	IncrementalSource,
	MouseInteractions,
	ReplayerEvents,
} from '@rrweb/types';

export type { recordOptions } from '../types/_.ts';

const { addCustomEvent } = record;
const { freezePage } = record;

export {
	_mirror as mirror,
	addCustomEvent,
	canvasMutation,
	freezePage,
	record,
	Replayer,
	utils,
};
