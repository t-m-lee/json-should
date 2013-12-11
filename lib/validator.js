/**
 * Created by Tom on 12/11/13.
 */

module.exports = exports = validator = {};

var should = require('should');

var schemas = {};

validator.loadSchemas = function(o) {

    if (isArray(o)) {

        for (var i = 0; i < o.length; i++) {

            schemas[o[i].id] = o[i];

        }

    }

    else if (isObject(o)) {

        for (var p in o) {

            if (o.hasOwnProperty(p)) {

                schemas[o[p].id] = o[p];

            }

        }

    }

};

validator.validate = function test(json, schema, strict) {

    if (schema.$ref) {

        schema = schemas[schema.$ref];

    }

    if (!schema.nullable) {

        should.exist(json);

    }

    if (!json) return;

    json.should.be.a[schema.type];

    if (schema.type === Object && schema.properties) {

        for (var p in schema.properties) {

            if (schema.properties.hasOwnProperty(p)) {

                json.should.have.property(p);
                test(json[p], schema.properties[p], strict);

            }

        }

        if (strict) {

            for (var o in json) {

                if (json.hasOwnProperty(o)) {

                    schema.properties.should.have.property(o);

                }

            }

        }

    }

    else if (schema.type === Array && schema.items) {

        for (var i = 0; i < json.length; i++) {

            test(json[i], schema.items, strict)

        }

    }

};

function isObject(o) {

    return Object.prototype.toString.call(o) === '[object Object]';

}

function isArray(o) {

    return Object.prototype.toString.call(o) === '[object Array]';

}