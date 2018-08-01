const double = require('./double');

describe('double should', ()=> {
    [
        {
            i: undefined,
            e: 0,
        },
        {
            i: null,
            e: 0,
        },
        {
            i: NaN,
            e: 0,
        },
        {
            i: 2,
            e: 4,
        },
        {
            i: 2.5,
            e: 5,
        },{
            i: -2,
            e: -4,
        },
    ].forEach(({i: input, e: expected})=>{
        test(`input ${input} be ${expected}`, ()=>{
            expect(double(input)).toBe(expected);
        })
    })

});
