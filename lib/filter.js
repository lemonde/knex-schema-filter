'use strict';

var _ = require('lodash');
var async = require('async');

/**
 * Module interface.
 */

exports.filter = filterSchemas;

/**
 * Filter provided schemas using tableNames and
 * include schemas dependencies.
 *
 * @param {[Schema]} schemas
 * @param {[String]} tableNames
 * @param {Function} callback
 */
function filterSchemas(schemas, tableNames, callback) {
  if (! (schemas || []).length || ! (tableNames || []).length)
    return process.nextTick(_.partial(callback, null, schemas || []));

  var schemasMap = _.indexBy(schemas, 'tableName');
  var filteredSchemas = _.chain(schemasMap).pick(tableNames).toArray().value();
  resolveSchemasDeps(filteredSchemas, schemasMap, callback);
}

/**
 * Resolve provided schemas dependencies.
 *
 * @param {[Schema]} schemas
 * @param {Object} schemasMap
 * @param {Function} callback
 */

function resolveSchemasDeps(schemas, schemasMap, callback) {
  async.reduce(schemas, [], function (result, schema, next) {
    tryAndDelay(resolveSchemaDeps, [], schema, schemasMap, next);
  }, function (err, result) {
    return err ? callback(err) : callback(null, _.uniq(result));
  });
}

/**
 * Resolve provided schema dependencies.
 *
 * @param {[Schema]} result
 * @param {Schema} schema
 * @param {Object} schemasMap
 * @return {[String]} - table names
 */

function resolveSchemaDeps(result, schema, schemasMap) {
  if (! (schema.deps || []).length) return result.concat([ schema ]);

  return schema.deps.reduce(function (result, tableName) {
    return (result.indexOf(schemasMap[tableName]) >= 0) ?
           result :
           result.concat(resolveSchemaDeps(result, schemasMap[tableName], schemasMap));
  }, result).concat([ schema ]);
}

/**
 * Execute provided synchrone function as asynchrone.
 *
 * @param {Function} fn
 * @param {*...} args
 * @param {Function} callback
 */

function tryAndDelay(fn) {
  var args = _.chain(arguments).rest().initial().value();
  var callback = _.last(arguments);
  try {
    process.nextTick(_.partial(callback, null, fn.apply(null, args)));
  } catch (err) {
    process.nextTick(_.partial(callback, err));
  }
}