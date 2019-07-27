var utility = require('../Utility');
// const assert = require('assert')

var chai = require('chai');
var assert = chai.assert;

describe('Power', function () {

    it('It is Equal', function () {
        assert.equal(utility.power(2, 2), 4);
    });

    it('It is Not Equal', function () {
        assert.notEqual(utility.power(2, 2), 5)
    });
    it('It is Equal to 1', function () {
        assert.equal(utility.power(1, 0), 1)
    });
    it('It is not Equal to 1', function () {
        assert.notEqual(utility.power(1, 0), 2)
    });
});
