'use strict';

const Model = require('../mongo.js');
const schema = require('./example-schema.js');

/** 
 * Class representing a Team.
 * @extends Model
 */
class Example extends Model {}


module.exports = new Example(schema);

