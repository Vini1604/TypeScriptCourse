"use strict";
let meuNome;
meuNome = 'Vinicius';
console.log(meuNome);
let minhaIdade;
minhaIdade = 25;
minhaIdade = 25.5;
console.log(minhaIdade);
let isMale = true;
console.log(isMale);
let familyNames;
familyNames = ['Member1', 'Member2', 'Member3'];
let familyAge;
familyAge = [25, 17, 48, 53, 72];
let younger30 = familyAge.filter(x => x < 30);
let teen = familyAge.find(x => x === 17);
let total = familyAge.reduce((acc, x) => acc + x);
console.log(familyNames);
console.log(familyAge);
console.log(younger30);
console.log(teen);
console.log(total);
var situacao;
(function (situacao) {
    situacao[situacao["Pending"] = 0] = "Pending";
    situacao[situacao["Cancelled"] = 1] = "Cancelled";
    situacao[situacao["Finished"] = 2] = "Finished";
})(situacao || (situacao = {}));
let situacaoProd = situacao.Finished;
let tuple;
function swapNumbers(n1, n2) {
    return [n2, n1];
}
let returnFunction = swapNumbers(4, 5);
console.log(returnFunction);
let qualquerUm;
qualquerUm = 'Ola';
qualquerUm = 10;
//# sourceMappingURL=datatype.js.map