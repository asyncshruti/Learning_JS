/*
const student = {
  fullName: "Velora",
  marks: 80.9,
  printMarks: function () {
    console.log("marks = ", this.marks);
  },
};

const friend1 = 'Shruti';
const friend2 = 'Anuska';
const friend3 = 'Sourav';

const friends = ['Shruti','Anuska','Sourav'];
console.log(friends);
 
const years = new Array(2005, 2006, 2007);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Sourav';
console.log(friends)

const firstName = 'Shruti';
const shruti = [firstName, 'Mandal', 2025-2005, 'Student', friends ];
console.log(shruti.length);

*/

/*

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

*/
/*
class student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("College Website Data");
    console.log("Name: " + this.name);
    console.log("Email: " + this.email);
  }
}

let student1 = new student("Shruti", "shruti@gmail.com");

student1.viewData();

const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

*/
/*
eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  constructor(branch) {
    console.log("enter child constructor");
    super(); //to invoke parent class constructor
    this.branch = branch;
    console.log("exit child constructor");
  }

  work() {
    console.log("solve problems, build something");
  }
}

let engObj = new Engineer("chemical engg");

*/

const karanArjun = {
  salary: 50000,
};

const karanArjun2 = {
  salary: 50000,
};

const karanArjun3 = {
  salary: 50000,
};

const karanArjun4 = {
  salary: 50000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;

class ToyotaCar {
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  setBrand(brand) {
    this.brand = brand;
  }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");
