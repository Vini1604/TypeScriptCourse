"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userVinicius = { id: 1, nome: 'Vinicius', email: '', idade: 25 };
let userNormal = { id: 1, nome: '', email: '', idade: 25, password: '' };
let [user1, user2, ...userArray] = [
    { id: 1, nome: 'user1', email: '', idade: 10 },
    { id: 2, nome: 'user2', email: '', idade: 11 },
    { id: 3, nome: 'user3', email: '', idade: 12 },
    { id: 4, nome: 'user4', email: '', idade: 13 }
];
console.log(user1);
console.log(user2);
console.log(userArray);
