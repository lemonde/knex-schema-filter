'use strict';

/**
 * Module interface.
 */

module.exports = [
  { tableName: 'a' },
  { tableName: 'b', deps: [ 'a' ] },
  { tableName: 'c', deps: [ 'a', 'b' ] },
  { tableName: 'd', deps: [ 'a', 'b', 'c' ] },
  { tableName: 'e', deps: [ 'a', 'b', 'c', 'd' ] },
  { tableName: 'f' },
  { tableName: 'g', deps: [ 'f' ] }
];