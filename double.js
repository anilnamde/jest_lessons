module.exports = function double(number){
    if(typeof number === 'undefined') return 0;
    if(number === null) return 0;
    if(Number.isNaN(number)) return 0;
    return number * 2;
}