let meuNome : string;

meuNome = 'Vinicius';

console.log(meuNome);

let minhaIdade: number;
minhaIdade = 25;
minhaIdade = 25.5;
console.log(minhaIdade);

let isMale: boolean = true;
console.log(isMale);

let familyNames: Array<string>;
familyNames = ['Member1', 'Member2', 'Member3'];

let familyAge: number[];
familyAge = [25, 17, 48, 53, 72];

let younger30 = familyAge.filter(x => x < 30);
let teen = familyAge.find(x => x === 17);
let total = familyAge.reduce((acc, x) => acc + x);

console.log(familyNames);
console.log(familyAge);
console.log(younger30);
console.log(teen);
console.log(total);

enum situacao {
    Pending,
    Cancelled,
    Finished
}

let situacaoProd:situacao = situacao.Finished;

let tuple:[firstNumber:number, secondNumber:number]

function swapNumbers(n1:number, n2:number):[number, number]{
    return [n2, n1];
}

let returnFunction = swapNumbers(4,5);
console.log(returnFunction);

let qualquerUm: any;
qualquerUm = 'Ola';
qualquerUm = 10;