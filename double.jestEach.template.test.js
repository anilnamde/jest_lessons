const double = require('./double');

describe('double should', ()=> {
    test.each`
    input| expected
    ${undefined} | ${0}
    ${null} | ${0}
    ${NaN} | ${0}
    ${2} | ${4}
    ${2.5} | ${5}
    ${-2} | ${-4}
  `('input $input be $expected', ({input, expected})=>{
        expect(double(input)).toBe(expected);
    });
});