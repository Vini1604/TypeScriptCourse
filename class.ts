class Employee{
    #id: number;
    name: string;
    address: string;

    
    
    
    constructor(id: number, name: string, address: string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getInformation() : string{
      return `Nome: ${this.name}, Endereço: ${this.address}`;   
    }
}

class Manager extends Employee{
    constructor(id: number, name: string, address: string){
        super(id, name, address);
    }

    getInformation(): string {
        return `Nome: ${this.name}, Endereço: ${this.address}. É um gerente`;
    }
}

let vinicius = new Employee(1, 'Vinicius', 'Rua');
let vitor = new Manager(2, 'Vitor', 'Avenida');

console.log(vinicius.getInformation());
console.log(vitor.getInformation());