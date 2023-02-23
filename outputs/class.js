"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Login() {
        return { id: 1, nome: 'Vinicius', idade: 25, email: '' };
    }
    getInformation() {
        return `Nome: ${this.name}, Endereço: ${this.address}`;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getInformation() {
        return `Nome: ${this.name}, Endereço: ${this.address}. É um gerente`;
    }
}
let vinicius = new Employee(1, 'Vinicius', 'Rua');
let vitor = new Manager(2, 'Vitor', 'Avenida');
console.log(vinicius.getInformation());
console.log(vitor.getInformation());
//# sourceMappingURL=class.js.map