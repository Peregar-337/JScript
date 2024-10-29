class Person {
   constructor(name, age){
    this.name = name;
    this.age = age;

   }
   print(){
    console.log(`Name: ${this.name} Age:${this.age}`)
   }
    }


class Employee extends Person{
  constructor(name, age, company,){
    super(name, age);
    this.company = company;

  }
work(){
    console.log(`${this.name}works in ${this.company}`);
    
}
}
  

const tom = new Person("tom", 34);
tom.print();
const sam = new Employee("Sam", 25,"Google");
sam.print();
sam.work();
