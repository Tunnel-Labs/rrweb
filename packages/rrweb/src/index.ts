import record from './record';
import { Replayer } from './replay';
import canvasMutation from './replay/canvas';
import { _mirror } from './utils';
import * as utils from './utils';

export {
	EventType,
	type eventWithTime,
	IncrementalSource,
	MouseInteractions,
	ReplayerEvents,
} from '@rrweb/types';

export type { recordOptions } from './types';

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
