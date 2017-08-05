// @flow

const chalk = require('chalk');

function format (_pid/*: number */, _result/*: string */, _type/*: string */)/*: string */ {
  const pid = _pid
    ? `      ${_pid}`.slice(-6)
    : '';
  const type = `        ${_type}`.slice(-8);
  const result = `      ${_result}`.slice(-6);

  return `${pid ? '[' : ''}${pid}${pid ? '] ' : ''}${type} ${result}`;
}

function debug (pid/*: number */, type/*: string */, info/*: Array<any> */)/*: void */ {
  console.info.apply(null, [chalk.blue(format(pid, 'DEBUG', type))].concat(info));
}

function error (pid/*: number */, type/*: string */, info/*: Array<any> */)/*: void */ {
  console.error.apply(null, [chalk.red(format(pid, 'ERROR', type))].concat(info));
}

function log (pid/*: number */, type/*: string */, info/*: Array<any> */)/*: void */ {
  console.log.apply(null, [format(pid, 'INFO', type)].concat(info));
}

function ok (pid/*: number */, type/*: string */, info/*: Array<any> */)/*: void */ {
  console.log.apply(null, [chalk.green(format(pid, 'OK', type))].concat(info));
}

function warn (pid/*: number */, type/*: string */, info/*: Array<any> */)/*: void */ {
  console.warn.apply(null, [chalk.yellow(format(pid, 'WARN', type))].concat(info));
}

module.exports = {
  debug,
  error,
  format,
  log,
  ok,
  warn
};
