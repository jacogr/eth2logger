// @flow

const { debug, error, log, ok, warn } = require('./log');

function logger (type/*: string */, withDebug/*: boolean */ = false) {
  const isBrowser/*: boolean */ = typeof window !== 'undefined';
  const pid/*: number */ = isBrowser ? 0 : process.pid;

  return {
    debug: withDebug
      ? (...info/*: Array<any> */)/*: void */ => debug(pid, type, info)
      : (...info/*: Array<any> */)/*: void */ => {},
    error: (...info/*: Array<any> */)/*: void */ => error(pid, type, info),
    log: (...info/*: Array<any> */)/*: void */ => log(pid, type, info),
    ok: (...info/*: Array<any> */)/*: void */  => ok(pid, type, info),
    warn: (...info/*: Array<any> */)/*: void */  => warn(pid, type, info)
  };
}

module.exports = logger;
