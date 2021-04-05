const {
    expect
} = require('chai');
const sum = require('./sumOfNums');

describe('Sum of nums', () => {
    it('works with num values', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });
});