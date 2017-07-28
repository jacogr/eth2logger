// @flow

const chalk = require('chalk');

function logger (type/*: string */, withDebug/*: boolean */ = false) {
  const isBrowser/*: boolean */ = typeof window !== 'undefined';
  const pid/*: number */ = isBrowser ? 0 : process.pid;

  function format (_result/*: string */, _type/*: string */)/*: string */ {
    const pids = pid
      ? `      ${pid}`.slice(-6)
      : '';
    const type = `        ${_type}`.slice(-8);
    const result = `      ${_result}`.slice(-6);

    return `${pids ? '[' : ''}${pids}${pids ? '] ' : ''}${type} ${result}`;
  }

  function debug (...info/*: Array<any> */)/*: void */ {
    if (!withDebug) {
      return;
    }

    console.info.apply(null, [chalk.blue(format('DEBUG', type, pid))].concat(info));
  }

  function error (...info/*: Array<any> */)/*: void */ {
    console.error.apply(null, [chalk.red(format('ERROR', type, pid))].concat(info));
  }

  function log (...info/*: Array<any> */)/*: void */ {
    console.log.apply(null, [format('INFO', type, pid)].concat(info));
  }

  function ok (...info/*: Array<any> */)/*: void */ {
    console.log.apply(null, [chalk.green(format('OK', type, pid))].concat(info));
  }

  function warn (...info/*: Array<any> */)/*: void */ {
    console.warn.apply(null, [chalk.yellow(format('WARN', type, pid))].concat(info));
  }

  return {
    debug,
    error,
    log,
    ok,
    success: ok,
    warn
  };
}

module.exports = logger;
