# knex-schema-filter
[![Build Status][status]](https://travis-ci.org/lemonde/knex-schema-filter) [![Dependency Status][deps]](https://david-dm.org/lemonde/knex-schema-filter) [![devDependency Status][devdeps]](https://david-dm.org/lemonde/knex-schema-filter#info=devDependencies) [![Coverage Status][coverage]](https://coveralls.io/r/lemonde/knex-schema-filter)

[status]: https://travis-ci.org/lemonde/knex-schema-filter.svg?branch=master
[deps]: https://david-dm.org/lemonde/knex-schema-filter.svg
[devdeps]: https://david-dm.org/lemonde/knex-schema-filter/dev-status.svg
[coverage]: https://coveralls.io/repos/lemonde/knex-schema-filter/badge.png

[knex-schema](https://github.com/lemonde/knex-schema) schema filter component.

## Install

```
npm install knex-schema-filter
```

## Usage

```javascript
var filter = require('knex-schema-filter');
var tableNames = [ 'some-table-name', 'some-other-table-name' ];
filter.filter(schemas, tableNames, function (err, schemas) {
    // Schemas contains targeted tableNames deps
});
```
## License

MIT