const double = require('./double');

describe('double should', ()=> {
    [
        [undefined, 0],
        [null,0],
        [NaN,0],
        [2,4],
        [2.5,5],
        [-2,-4]
    ].forEach(([input, expected])=>{
        test(`input ${input} be ${expected}`, ()=>{
            expect(double(input)).toBe(expected);
        })
    })

});
