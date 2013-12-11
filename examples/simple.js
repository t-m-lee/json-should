/**
 * Created by Tom on 12/11/13.
 */

var validator = require('../lib/validator');

var objectSchema = {
    type: Object
};

validator.validate({}, objectSchema);

var arraySchema = {
    type: Array
};

validator.validate([], arraySchema);

var stringSchema = {
    type: String
};

validator.validate("", stringSchema);

var numberSchema = {
    type: Number
};

validator.validate(0, numberSchema);

var booleanSchema = {
    type: Boolean
};

validator.validate(false, booleanSchema);


