const double = require('./double');

describe('double should', ()=>{
    test('undefined should be 0', ()=>{
        expect(double()).toBe(0)
        expect(double(undefined)).toBe(0)
    })
    test('null should be 0', ()=>{
        expect(double(null)).toBe(0)
    })

    test('NaN should be 0', ()=>{
        expect(double(NaN)).toBe(0)
    })

    test('2 should be 4', ()=>{
        expect(double(2)).toBe(4)
    })

    test('2.5 should be 4', ()=>{
        expect(double(2.5)).toBe(5)
    })

    test('-2 should be -4', ()=>{
        expect(double(-2)).toBe(-4)
    })
})

