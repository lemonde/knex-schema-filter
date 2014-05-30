# knex-schema-fiter
[![Build Status][status]](https://travis-ci.org/lemonde/knex-schema-fiter) [![Dependency Status][deps]](https://david-dm.org/lemonde/knex-schema-fiter) [![devDependency Status][devdeps]](https://david-dm.org/lemonde/knex-schema-fiter#info=devDependencies) [![Coverage Status][coverage]](https://coveralls.io/r/lemonde/knex-schema-fiter)

[status]: https://travis-ci.org/lemonde/knex-schema-fiter.svg?branch=master
[deps]: https://david-dm.org/lemonde/knex-schema-fiter.svg
[devdeps]: https://david-dm.org/lemonde/knex-schema-fiter/dev-status.svg
[coverage]: https://coveralls.io/repos/lemonde/knex-schema-fiter/badge.png

[knex-schema](https://github.com/lemonde/knex-schema) schema filter component.

## Install

```
npm install knex-schema-fiter
```

## Usage

```javascript
var filter = require('knex-schema-fiter');
var tableNames = [ 'some-table-name', 'some-other-table-name' ];
filter.filter(schemas, tableNames, function (err, schemas) {
    // Schemas contains targeted tableNames deps
});
```
## License

MIT