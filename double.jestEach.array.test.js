const double = require('./double');

describe('double should', ()=> {
    test.each([
        [undefined, 0],
        [null,0],
        [NaN,0],
        [2,4],
        [2.5,5],
        [-2,-4]
    ])('input %s be %d', (input, expected)=>{
            expect(double(input)).toBe(expected);
    });
});
