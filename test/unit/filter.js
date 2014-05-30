'use strict';

var _ = require('lodash');
var expect = require('chai').expect;
var filter = require('../..');

describe('Knex schema filter', function () {
  var schemas, tableNames;

  describe('given nothing', function () {
    it('should return empty array', function (done) {
      filter.filter(schemas, tableNames, function (err, schemas) {
        if (err) return done(err);
        expect(schemas).to.eql([]);
        done();
      });
    });
  });

  describe('given empty schemas', function () {
    beforeEach(function () {
      schemas = [];
    });

    it('should return empty array', function (done) {
      filter.filter(schemas, tableNames, function (err, schemas) {
        if (err) return done(err);
        expect(schemas).to.eql([]);
        done();
      });
    });
  });

  describe('given schemas', function () {
    beforeEach(function () {
      schemas = require('../fixtures/schemas');
    });

    it('should return all schemas', function (done) {
      filter.filter(schemas, tableNames, function (err, schemas) {
        if (err) return done(err);
        expect(schemas).to.eql(schemas);
        done();
      });
    });

    describe('given empty table names', function () {
      beforeEach(function () {
        tableNames = [];
      });

      it('should return all schemas', function (done) {
        filter.filter(schemas, tableNames, function (err, schemas) {
          if (err) return done(err);
          expect(schemas).to.eql(schemas);
          done();
        });
      });
    });

    describe('given table name a', function () {
      beforeEach(function () {
        tableNames = ['a'];
      });

      it('should return all schemas', function (done) {
        filter.filter(schemas, tableNames, function (err, schemas) {
          if (err) return done(err);
          expect(schemas).to.eql(filterSchemas(schemas, 'a'));
          done();
        });
      });
    });

    describe('given table name b', function () {
      beforeEach(function () {
        tableNames = ['b'];
      });

      it('should return all schemas', function (done) {
        filter.filter(schemas, tableNames, function (err, schemas) {
          if (err) return done(err);
          expect(schemas).to.eql(filterSchemas(schemas, 'a', 'b'));
          done();
        });
      });
    });

    describe('given table name c', function () {
      beforeEach(function () {
        tableNames = ['c'];
      });

      it('should return all schemas', function (done) {
        filter.filter(schemas, tableNames, function (err, schemas) {
          if (err) return done(err);
          expect(schemas).to.eql(filterSchemas(schemas, 'a', 'b', 'c'));
          done();
        });
      });
    });

    describe('given table name d', function () {
      beforeEach(function () {
        tableNames = ['d'];
      });

      it('should return all schemas', function (done) {
        filter.filter(schemas, tableNames, function (err, schemas) {
          if (err) return done(err);
          expect(schemas).to.eql(filterSchemas(schemas, 'a', 'b', 'c', 'd'));
          done();
        });
      });
    });

    describe('given table name e', function () {
      beforeEach(function () {
        tableNames = ['e'];
      });

      it('should return all schemas', function (done) {
        filter.filter(schemas, tableNames, function (err, schemas) {
          if (err) return done(err);
          expect(schemas).to.eql(filterSchemas(schemas, 'a', 'b', 'c', 'd', 'e'));
          done();
        });
      });
    });

    describe('given table name e and g', function () {
      beforeEach(function () {
        tableNames = ['d'];
      });

      it('should return all schemas', function (done) {
        filter.filter(schemas, tableNames, function (err, schemas) {
          if (err) return done(err);
          expect(schemas).to.eql(filterSchemas(schemas, 'a', 'b', 'c', 'd', 'e', 'f', 'g'));
          done();
        });
      });
    });
  });
});

/**
 * Filter provided schemas using table names arguments.
 *
 * @param {[Schema]} schemas
 * @param {String...} tableName
 */

function filterSchemas(schemas) {
  var tableNames = _.rest(arguments);
  return schemas.filter(function (schema) {
    return tableNames.indexOf(schema.tableName) >= 0;
  });
}