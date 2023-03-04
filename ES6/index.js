// var -> function
// let -> block

function sayHello() {
    for (var i = 0; i < 5; i++) { //var lifetime exists outside the block in which it is defined. It is almost always better to just use let.
        console.log(i);
    }
    console.log(i);

    // BETTER
    for (let j = 0; j < 5; j++) {
        console.log(j);
    }
    // j does not have scope here.
}

const person = {
    name: "Ben",
    walk: function() {
        console.log(this);
    },
    talk() {}
};

person.walk();
const targetMember = 'name';

person['name'] = 'Mae';
person[targetMember] = 'Love';

person.walk();
const walk = person.walk;
console.log(walk);

sayHello();