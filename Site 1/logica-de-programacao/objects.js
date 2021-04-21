const person = {
    name: "Bruce",
    age: 35,
    teacher: true,
    sayHello: function () {
        console.log(`Oi, meu nome é ${this.name} e eu tenho ${this.age}.`);
    },
};

person.sayHello();