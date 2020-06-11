// import * as lib from './Function.js';
// Qoukka เปิดสำหรับการเช็คข้อมูลใน Javascript

// -- JavaScript Array ที่คุณควรรู้

// คำสั่งต่างๆ

// let cars = ['Mazda','Ford','BMW'];
let cars = new Array('Mazda', 'Ford', 'BMW');
console.log(cars);

cars.push('Honda'); // เพิ่มข้อมูลต่อท้าย
console.log(cars);

cars.unshift('Lambo'); // เพิ่มข้อมูลเข้าไปข้างหน้า
console.log(cars);

cars.pop(); // ลบข้อมูลตัวสุดท้าย
console.log(cars);

cars.shift(); // ลบข้อมูลตัวหน้า
console.log(cars);

cars.splice(2, 1);  //ลบข้อมูล index 0 (index,1) 0 = เพิ่ม , 1 = ลบ,แทนที่
console.log(cars);

cars.splice(1, 0, 'Lambo');  // แทรกข้อมูล index 1 (index,0,param) 0 = เพิ่ม , 1 = ลบ,แทนที่(ถ้ามีข้อมูลจะเป็นการแทนที่)
console.log(cars);

cars.splice(2, 1, 'Mazda2');  // แทนที่ข้อมูล index 2 (index,1,param) 0 = เพิ่ม , 1 = ลบ,แทนที่
console.log(cars);

cars.reverse();  // สลับตำแหน่งข้อมูล
console.log(cars);



let city = ['Paris', 'London', 'New York', 'Barcelona', 'Madrid', 'San Francisco'];

// city.sort(); // เรียงตามตัวอักษร
console.log(city);

let citySort = city.sort((cityA, cityB) => {
    console.log(cityA, cityB);
    console.log(cityA.length, cityB.length);
    return cityA - cityB;
})
console.log(citySort);

let cityBylength = city.filter((city) => { // Filter
    return city.length > 6;
})
console.log(cityBylength);

let cityWithTwoWords = city.filter((city) => {
    let words = city.split(' ');
    return words.length > 1;
})
console.log(cityWithTwoWords);

let findCity = city.find((city) => { // หาข้อมูลใน Array
    return city === 'London';
})
console.log(findCity);

let findIndexCity = city.findIndex((city) => { // หา index ใน Array
    return city === 'London';
})
console.log(findIndexCity);

//  ต่อ 28.00


//---------------------------

let person = {
    firstName: 'Thanawat',
    lastName: 'khamchana',
    age: 25,
    address: {
        street: '123 Something st',
        city: 'Bangkok',
        state: 'TH'
    },
    fullName: function () { // ***
        return this.firstName + ' ' + this.lastName;
    },
}
console.log(person.fullName());

// -- Object
let apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.descripe = function () {
    return `An apple is the color ${this.color} and is the shape ${this.shape}`
}
console.log(apple.descripe())


// -- Object Constructor pattern
function Fruits(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function () {
        return `A ${this.name} is the color ${this.color} is the shape ${this.shape}`
    }
}
let melon = new Fruits('melon', 'green', 'round');
console.log(melon.describe());


// -- Arrow Function
const myFunc = (name) => {
    return `Hi ${name}`
}
const myFunc2 = name => `Hi ${name}`;
console.log(myFunc('Thanawat'));
console.log(myFunc2('Thanawat'));

const myArray = ['tony', 'Sara', 'Tom', 5];
// ES5
let ArrES5 = myArray.map(function (item) {
    return item;
});
console.log(ArrES5);
// ES6
let ArrES6 = myArray.map(item => item);
console.log(ArrES6)


// -- Array and object destructing
const contacts = {
    firstname: 'thanawat',
    lastname: 'khamchana',
    age: 25
}
let { firstname: fName, lastName, age } = contacts;
console.log(fName);


// -- JavaScript ES6 : Import and export
// console.log(lib.square(11));
// console.log(lib.diag(6, 3));


// -- JavaScript ES6 : Call Back | [ตอนที่ 7]
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework`);
    callback();
}

// Ex1. function is Callback
doHomework('math', function () {
    console.log('Finished my homework');
})
// Ex2. alertFinished is Callback
function alertFinished() {
    console.log('Finished my homework');
}
doHomework('math', alertFinished);


// -- JavaScript ES6 : Promises | [ตอนที่ 8]
// ES5
// let isMomHappy = true;
// let willGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             let phone = {
//                 brand: 'iPhone',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             let reason = new Error('Mom is not Happy');
//             reject(reason)
//         }
//     }
// )
// // second promise
// let showoff = function (phone) {
//     return new Promise(
//         function (resolve, reject) {
//             let message = 'Hey firend, I have a new ' + phone;
//             resolve(message);
//         }
//     )
// }

// // call our promise
// let askMom = function () {
//     willGetNewPhone
//         .then(showoff)
//         .then(function (fullfilled) {
//             console.log(fullfilled)
//         })
//         .catch(function (error) {
//             console.log(error.message);
//         })
// }
// askMom();

// ES6
const isMomHappy = true;
const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            brand: 'iPhone',
            color: 'black'
        };
        resolve(phone);
    } else {
        const reason = new Error('Mom is not Happy');
        reject(reason)
    }
})
// second promise
let showoff = function (phone) {
    const message = 'Hey firend, I have a new ' + phone;
    return Promise.resolve(message);
}

// call our promise
let askMom = function () {
    willGetNewPhone
        .then(showoff)
        .then((fullfilled) => { console.log(fullfilled) })
        .catch((error) => { console.log(error.message) })
}

askMom();


// -- JavaScript ES6 : Rest Parameter & Spread Operator | [ตอนที่ 9]
// Rest Parameter
function add(...args) {
    let result = 0;
    for (let arg of args) result += arg;
    return result;
}
console.log(add(1, 2, 3, 4));

function xyz(x, y, ...z) {
    console.log(x, ' ', y);
    console.log(z);
}
xyz('1', '2', '3', '4', '5', '6');

// Spread Operator
const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5];
console.log(arr2)


// -- JavaScript ES6 : Prototypes and Inheritance | [ตอนที่ 10]
let x = new Object();
console.log(x);
console.log(Object.getPrototypeOf(x));
console.log(x.__proto__);

let y = new Array();
console.log(y.__proto__);
console.log(y.__proto__.__proto__);

// -- JavaScript ES6 : Constructor Functions | [ตอนที่ 11]

function Hero(name, level) {
    this.name = name;
    this.level = level;
}
let hero1 = new Hero('Miler', 1);
let hero2 = new Hero('Max', 2);
console.log(hero1);
console.log(hero2);

// -- JavaScript ES6 : Classes | [ตอนที่ 12]


//แกะ Query String ด้วย URLSearchParams
const queryString = 'search=prayut&limit=44'
const qr = 'http://www.legacy.co.th/th/home/?LgcSKU=8859230810031&LgcLot=&LgcStart=&LgcExpire=&LgcSN=a005345';
const params = new URLSearchParams(qr.split('?')[1])

console.log(params)

let a = {}
for (let [key, value] of Object.entries(params)) {
    a[key] = value;
    console.log(a);
}

const e = params.entries(); //returns an iterator of decoded [key,value] tuples
console.log(e)

// const params2 = paramsToObject(e); 

console.log(JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}'))