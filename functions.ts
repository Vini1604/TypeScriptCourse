function add(n1 :number, n2 : number, n3 = 0) : number{
    return n1 + n2 + n3;
}

function add2(n1: number, n2: number, ...n3 : number[]): number{
    return n1 + n2 + n3.reduce((x, y) => x + y, 0);
}

const sub = (n1 : number, n2 : number) => n1 - n2;

const times = function(n1 : number, n2 : number) : number{
    return n1 * n2;
}

function getItens<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let numbers: number[] = [5,6,7,8];

let itemsMarket = getItens<string>(['Water', 'Soap', 'Bottle']);

console.log(`Soma1 = ${add(1, 2)}`);
console.log(`Soma2 = ${add(1, 2, 3)}`);
console.log(`Soma3 = ${add2(1, 2, ...numbers)}`);
console.log('Subtracao = ' + sub(6, 3));
console.log(`Multiplicacao = ${times(4, 5)}`);