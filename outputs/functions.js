"use strict";
function add(n1, n2, n3 = 0) {
    return n1 + n2 + n3;
}
function add2(n1, n2, ...n3) {
    return n1 + n2 + n3.reduce((x, y) => x + y, 0);
}
const sub = (n1, n2) => n1 - n2;
const times = function (n1, n2) {
    return n1 * n2;
};
function getItens(items) {
    return new Array().concat(items);
}
let numbers = [5, 6, 7, 8];
let itemsMarket = getItens(['Water', 'Soap', 'Bottle']);
console.log(`Soma1 = ${add(1, 2)}`);
console.log(`Soma2 = ${add(1, 2, 3)}`);
console.log(`Soma3 = ${add2(1, 2, ...numbers)}`);
console.log('Subtracao = ' + sub(6, 3));
console.log(`Multiplicacao = ${times(4, 5)}`);
//# sourceMappingURL=functions.js.map