// @flow

const logger = require('./index');

const nl = logger('node');

nl.log('It can log a basic string as a log');
nl.warn('... and also as a warning');
nl.error('... event as an error');
nl.error(new Error('... or as an Error object'));
nl.success('... or when you are really happy');
nl.log('it', 'also', 'takes', ['multiple', 'params'], 'for normal console compatibility');
nl.debug('debug messages are skipped (you are not seeing this)');

global.window = 'something not undefined';

const bl = logger('browser');

bl.warn('when used from borwser, it skips the pid');

const dl = logger('debug', true);

dl.debug('With debug enabled', 'anything', ['goes', 'out'], new Error('hi, I am an error'));
