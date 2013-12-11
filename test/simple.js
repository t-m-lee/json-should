/**
 * Created by Tom on 12/11/13.
 */

var should = require('should');
var validator = require('../lib/validator');

describe('validator.validate()', function() {

    var objectSchema = {
        type: Object
    };

    var arraySchema = {
        type: Array
    };

    var stringSchema = {
        type: String
    };

    var numberSchema = {
        type: Number
    };

    var booleanSchema = {
        type: Boolean
    };

    it('should not throw an exception for validator.validate({}, objectSchema)', function() {

        (function() {

            validator.validate({}, objectSchema);

        }).should.not.throw();

    });

    it('should not throw an exception for validator.validate([], arraySchema)', function() {

        (function() {

            validator.validate([], arraySchema);

        }).should.not.throw();

    });

    it('should not throw an exception for validator.validate("", stringSchema)', function() {

        (function() {

            validator.validate("", stringSchema);

        }).should.not.throw();

    });

    it('should not throw an exception for validator.validate(0, numberSchema)', function() {

        (function() {

            validator.validate(0, numberSchema);

        }).should.not.throw();

    });

    it('should not throw an exception for validator.validate(false, booleanSchema)', function() {

        (function() {

            validator.validate(false, booleanSchema);

        }).should.not.throw();

    });

});