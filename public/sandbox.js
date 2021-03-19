"use strict";
const character___ = 'Mario';
console.log(character___);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => console.log(input));
// Types
let character = 'mario';
let age = 30;
let isBlackBelt = false;
// character = 20
character = 'luigi';
// age = 'yasho'
age = 40;
// isBlackBelt = 'yes'
isBlackBelt = true;
const circ = (diameter) => diameter * Math.PI;
console.log(circ(30));
// Arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(1)
// names[0] = 3
let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('25')
let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
// mixed.push(false)
// Objects
let ninja = {
    name: 'maria',
    belt: 'black',
    age: 30
};
ninja.age = 40;
// ninja.age = '40'
// ninja.color = 'red'
// ninja = '?'
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 30,
    // skills: []
};
// Explicit Types  
let char;
let age_;
let isLoggedIn;
char = 'Hello';
age = 30;
isLoggedIn = true;
let ninjas = [];
// ninjas = ['10', '23']
// ninjas.push('10')
// union types
let mixed_ = [];
mixed_.push('hello');
mixed_.push(20);
mixed_.push(false);
console.log(mixed_);
let uid;
uid = '123';
uid = 123;
uid = false;
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = [];
let ninjaTwo;
// ninjaTwo = {}
ninjaTwo = {
    name: 'mario',
    age: 40,
    beltColor: 'green',
    // skills: [] 
};
// any type
let anyType = 255;
console.log('anyType = ' + anyType);
anyType = 25;
console.log('anyType = ' + anyType);
anyType = false;
console.log('anyType = ' + anyType);
anyType = 'string';
console.log('anyType = ' + anyType);
let mixed__ = [];
mixed__.push('mario');
mixed__.push(false);
// mixed__.push(mixed__)
console.log(mixed__);
let ninjaThree;
// test
let greet = () => {
    console.log('hello world');
};
// greet = ''
greet = () => console.log('Hello');
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(1, 2, 3);
add(1, 2);
const minus = (a, b) => {
    return a - b;
};
console.log(minus(1, 2));
let greet_;
greet_ = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
    // return 'h'
};
let calc;
calc = (numberOne, numbertWO, action) => {
    if (action === 'add')
        return numberOne + numbertWO;
    else
        return numberOne - numbertWO;
};
