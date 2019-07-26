var chai = require('chai');
var assert = chai.assert;
var leap=require('../Utility')
describe('leap', function () {
    it('It is Not Leap', function () {
        assert.equal(leap.leapYear(1000), false);
    });

    it('It is leap', function () {
        assert.notEqual(leap.leapYear(2014), false)
    });
    // it('It is Equal to 1', function () {
    //     assert.equal(leap.power(1, 0), 1)
    // });
    // it('It is not Equal to 1', function () {
    //     assert.notEqual(leap.power(1, 0), 2)
    // });
});
