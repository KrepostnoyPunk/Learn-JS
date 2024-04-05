//   STRUCTURE
/*
alert("Hello World!")

alert("Hello"); alert("World")

alert("Hello"); 
alert("World!");
*/


//   VARIABLES
/*
let axel
axel="#Suck"
console.log(axel)

let a=1; b=2; c=3;

let message
console.log(message)

message="Hello"
console.log(message)

message=axel
console.log(message);
console.log(axel);

let name="John"
let admin=name
console.log(admin);

let planetEarth="Big blue girl"

let currentUser=""

true
false
*/


//   DATA STRUCTURES
/*
let message = "hello"
console.log(message);
message = 12345
console.log(message);

let n = 123
console.log(n);
n = 2.5
console.log(n);

console.log(3/0);
console.log(-3/0);

console.log(Infinity);
console.log(-Infinity);

console.log("a"/2);
console.log(NaN+1);
console.log(8*NaN);

console.log(NaN**0);

let userName='Ivan'
console.log(`Hello, ${userName}!`);

userName="empty"
console.log(userName);

let age=null
console.log(age);

let boss
console.log(boss);

console.log(typeof null) // языковая ошибка!
*/


//   alert, prompt, confirm
/*
alert ('Hello again!')

let a=prompt(title,default)
console.log(a);

let age=prompt("How old are you?", 1000)
console.log(`Amazing, you are ${age} years old!`);

let b=confirm('Are you gay?')
console.log(b)

let userName=prompt("What is your name?", "User")
console.log(userName);
*/


//   TYPE CONVERSION
/*
let v=true
console.log(typeof v);
v=String(v)
console.log(typeof v);

let str="12384"
console.log(typeof str);
str=Number(str)
console.log(typeof str);

let socks=Number('Socks')
console.log(typeof socks);

let rtue=Number(true)
console.log(rtue);

let alsef=Number(false)
console.log(alsef);

let finded=Number(undefined)
console.log(finded);

let full=Number(null)
console.log(full);

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("sex"));
console.log(Boolean("0"));
console.log(Boolean("   "));
*/


//   BASIC OPERATORS
/*
let a=1 
console.log(a);
a=-1 // - унарный оператор т.к. прим. к одному опернаду
console.log(a);

let b=2
let c=1
console.log(b-c); // тот же - здесь, бинарный оператор т.к. прим. к двум операндам

console.log(5%2);

console.log(2**3);

let s='My'; x='string';
console.log(s+x);

console.log("2"+1);
console.log(1+"2");

console.log(4+2+"1");

console.log(+true);
console.log(+"");

let n=1
n+=2
console.log(n);
n*=5
console.log(n);
n-=10
console.log(n);

let p=2
console.log(++p);
p=2
console.log(p++);

let h=Number(prompt('First', 1))
let g=Number(prompt('Second', 2))
console.log(h+g);
*/


//   BOOLEANS
/*
console.log(2>1);

console.log(2<1);

console.log(2==1);

console.log(2!=1);

let a=5>4
console.log(a);

console.log("a">"h");

console.log("a"<"b");
*/


//   IF STATEMENTS + ?
/*
let birthdayYear=prompt("What is birthday of JS?")
if (birthdayYear==1999) {
    alert("You are right!")
}

let birthdayYear=prompt("What is birthday of JS?")
let condition=(birthdayYear==1999)
if (condition) {
    alert("YES!")
} else {
    alert("NO!")
}

let age=prompt("What is your age?")
let message=(age<3)? 'Hello kiddo!':
(age<18)? 'You are now allowed':
(age>1000)? 'How the frick you  are still alive?':
'Well...'
alert(message)

if("0") {
    alert('Hi')
}

let name=prompt("What is official name of JS?")
//let message=(name=="ECMAScript")? 'True!':
//'Nuuh...It is ECMAScript!'
//alert(message)
if(name=="ECMAScript") {
    alert("True!")
} else {
    alert("Nuuh...It is ECMAScript!")
}

let num=Number(prompt("Enter your number!"))
if(num>0) {
    console.log(1);
} else if(num<0) {
    console.log(-1);
} else if(num===0) {
    console.log(0);
}

let result
let a=1
let b=3
let message=(a+b<4)? result='Low':
result='Much'
console.log(result);
*/


//   LOGIC OPERATORS
/*
let hour=9
if(hour<10 || hour>18) {
    alert('Closed!')
}

let a,b="";c="True"
alert(a||b||c)

let hour=12
let minute=30
if(hour==12 && minute==30) {
    alert('Time is 12:30')
}

let age=90
if (age>=14 && age<=90) {
    alert('True')
} else {
    alert('False')
}

let age=91
if(!(age>=14 && age<=90)) {
    console.log("Correct");
}
if(age<14||age>90) {
    console.log("Correct too");
}

let login=prompt("Enter your login:") 
if(login=="admin") {
    let password=prompt("Enter passsword sir:")
    if(password=="main_01") {
        alert("Welcome back boss!")
    } else if(password==null) {
        alert("Decline.")
    } else {
        alert("Wrong password.")
    }
} else if(login==null) {
    alert("Decline.")
} else {
    alert("Access denied.")
}

let num=5
if(num>0 && num<10) {
    console.log("true");
}

let num=""
if(num=="" || num==null) {
    console.log('true');
}

let num=5
if(num==5 || num==6) {
    console.log("true");
}

let num=7
if(!(num==5 || num==6)) {
    console.log("true");
}

let num=7
if(!(num==5 && num==6)) {
    console.log("true");
}

let num=50
if(typeof num=="number" && (num>=10 && num<=100)) {
        console.log('true');
} else {
    console.log("false");
}

let str="string"
if(typeof str=="string" && str.length>5) {
    console.log('true');
}

let num=35
if(num%5==0 && num%7===0) {
    console.log("true");
}

let bool=true
if(bool==true && bool!=undefined) {
    console.log('true');
}

let num=15
if(num==0 || num>10) {
    console.log('true');
}
*/


//   WHILE, DO WHILE, FOR, SWITCH
/*
let i=0
while(i<3) {
    console.log(i);
    i++
}

let a=0
do {
    console.log(a);
    a++
} while(a<7)

for(let i=0;i<11;i++) {
    console.log(i);
}

for(let i=0;i<11;i++) {
    console.log(i);
    if(i==8) {
        break
    }
}

for(let i=0;i<11;i++) {
    if(i%2==0) {
        continue
    }
    console.log(i);
}

for(let i=2;i<12;i++) {
    if(i%2==0) {
        console.log(i);
    }
}

let i=0
while(i<3) {
    console.log(`number ${i}!`);
    i++
}

let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

let i=25
switch(i) {
    case 15:
        console.log('low');
        break
    case 25:
        console.log('ok');
        break
    case 35:
        console.log('too much');
    default:
        console.log("no such number");
}

let browserChoose=prompt("Select your browser:")
if(browserChoose=='Edge') {
    alert("You've got our product! Great!");
} else if(browserChoose=='Chrome' 
|| browserChoose=='Firefox'
|| browserChoose=='Safari'
|| browserChoose=='Opera') {
    alert("They are good too!")
} else {
    alert("We hope you can see something here:)")
}

let number=Number(prompt("Enter the nymber between 0 and 3",""))
switch(number) {
    case 0:
        alert(0)
        break
    case 1:
        alert(1)
        break
    case 2:
    case 3:
        alert("You enter 2, or maybe 3:)")
        break
}

for(let i=0;i<11;i++) {
    console.log(i);
}

for(let i=11;i;i--) {
    console.log(i);
}

for(let i=2;i<12;i++) {
    if(i%2==0) {
        console.log(i);
    }
}

for(let i=1;i<10;i++) {
    if(i%3==0) {
        console.log(i);
    }
}

let sum=0
for(let i=0;i<10;i++) {
    sum+=i
}
console.log(sum)

let multiply=1
for(let i=1;i<5;i++) {
    multiply*=i
}
console.log(multiply);

for(let i=1;i<5;i++) {
    console.log(i**2);
}

let str="JavaScript"
for(let i=0;i<str.length;i+=2) {
    console.log(str[i]);
}

for(let i=0;i<11;i+=3) {
    console.log(i);
}
*/


//   FUNCTIONS
/*
function test_1() {
    alert('aboba')
}
test_1()

function test_2(from,text="text is not enabled") {
    console.log(from + ":" + text);
}
test_2("Bob","Suck me")
test_2("Rob","Ok bro")
test_2("Gob")

function test_3(a,b) {
    return a+b
}
console.log(test_3(4,8));

function minNumber(a,b) {
    if(a>b) {
        return b
    } else {
        return a
    }
}
console.log(minNumber(2,6));

function powNumber(a,b) {
    return a**b
}
console.log(powNumber(2,3));
*/


//   FUNCTION EXPRESSION
/*
let sayHi=function() {
    alert("Hello World!")
}
sayHi()

function ask(question,yes,no) {
    if(confirm(question)) {
        yes()
    } else no()
}

function showYes() {
    alert('Yes.')
}

function showNo() {
    alert('No.')
}

ask('Choose the answer:',showYes,showNo)

function callbackTest(q,a) {
    if(confirm(q)) {
        a()
    } else {
        alert('You dont go away from here anywhere!!! Muhahahahahaaa!!!')
    }
}

function showA() {
    alert("Good...")
}

callbackTest('Do you want meat?',showA)
*/


//   ARROW FUNCTIONS
/*
let func=(a,b)=>a+b
console.log(func(2,2));

let hi=()=>alert('Hi')
hi()
*/


//   ??? AUTOMATION TESTING, BDD, Mocha ???
/*
mocha.setup('bdd');

let assert = chai.assert;

function pow(x,n) {
    return 8;
}

function pow(x, n) {
    let result=1;

    for(let i=0; i<n; i++) {
        result*=x;
    }

    return result;
}
*/


//   OBJECTS: beginning
/*
let men= new Object() // синтаксис "конструктор объекта"

let men_1={} // синтаксис "литерал объекта"
let man={
    age: 20,
    height: 190,
    'two words': true
}

alert(man.age)

man.name="Stephen"

alert(man.name)

delete man.age

console.log(man);

const user={
    name: "Sex"
}

user.name="NoSex"
console.log(user);

let user={}
user["suck me"]=false
console.log(user["suck me"]);
user["loneleness"]=true
delete user['suck me']
console.log(user);

console.log('loneleness' in user);
console.log('suck me' in user);

let user={
    age: 20,
    sex: "nosex",
    isAdmin: true
}

for (let key in user) {
    // console.log(key);
    // console.log(user[key]);
    console.log(user);
}

let user={
    name: 'Jack',
    surname: 'Smith'
}
console.log(user);
user.name="Pete"
console.log(user);
delete user.name
console.log(user);

function isEmpty(obj) {
    for(let key in obj) {
        return false
    } return true
}

let a={}
console.log(isEmpty(a));

a['12']='lol'
console.log(isEmpty(a));
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sum=0
for(let key in salaries) {
    sum+=salaries[key]
} 
console.log(sum);

let bar={
    drinks: 92,
    foods: 13,
    title: "unreliable"
}
console.log(bar);

function multiplyNymeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key]*=2
        }
    }
}
multiplyNymeric(bar)
console.log(bar);
*/


//   OBJECT CLONING AND REFS
/*

let message="Hello"
let phrase=message

console.log(message);
console.log(phrase);

let user={
    name: "Stepan",
    status: "admin"
}
let admin=user

console.log(user);
console.log(admin);

let clone={}
for(let key in user) {
    clone[key]=user[key]
}
console.log(clone);

let user={
    name: "Stepan",
    status: "admin"
}

let dudle={name: 'John'}
console.log(dudle);
Object.assign(dudle, user)
console.log(dudle);

let a={
    role: 'mag',
    age: '...',
    name: 'Triss'
}

let b={}

Object.assign(b, a)

console.log(a);
console.log(b);
*/


//   OBjECT METHODS, this
/*
let user={
    name: 'Connor',
    age: 103,
    sayHi : function () {...}"
        alert(`Hi ${this.name}!`)
    }
}
user.sayHi()

let car={
    drive() {
        alert('The car is driving!')
    }
}
car.drive()

let calculus={
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
    read() {
        this.a=+prompt('a?',0)
        this.b=+prompt('b?',0)
    }

}
calculus.read()
console.log(calculus.sum());
console.log(calculus.mul());

let user={
    age: 20,
    name: 'Stepan'
}
function grr(){
    console.log(this);
}
user.f=grr
user.f()

let admin={
    age: 20,
    name: 'Stepan',
    greeting: function () {
        console.log(`Hello, my name is ${this.name}, i'm ${this.age} years old!`);
    }
}
admin.greeting()

console.log(this);
*/


//   Constructor, new
/*
function User(name) {
    this.name=name;
    this.isAdmin=false;
    this.sayHi=function() {
        return (`My name is ${this.name}. Santa ${this.name}!`);
    }
}
let user=new User("Claus")
console.log(user.name);
console.log(user.isAdmin);
console.log((user.sayHi()));

function Calculator(){
    this.sum=function() {
        return this.a + this.b
    };
    this.mul=function() {
        return this.a * this.b
    };
    this.read=function(){
        this.a=+prompt('a?',0)
        this.b=+prompt('b?',0)
    }
}
let calculus=new Calculator()
calculus.read()
console.log(`Sum=${calculus.sum()}`);
console.log(`Mul=${calculus.mul()}`);

function Accumulator(startValue) {
    this.value=startValue
    this.read=function(){
        this.value += +prompt('Enter value', 0)
    }
}
let accumula=new Accumulator(3)
accumula.read()
console.log(accumula.value);

function User(name){
    this.name=name;
    this.isAdmin=false;
}
let user=new User('Max')
console.log(user.name);
console.log(user.isAdmin);

function Animal(name, sound){
    this.name=name;
    this.sound=sound
}
let cat=new Animal('cat','meow')
console.log(cat.name);
console.log(cat.sound);
let dogo=new Animal('dog','wof')
console.log(dogo.name);
console.log(dogo.sound);
// ...

function User(name){
    this.name=name;
    this.isAdmin=false;
    this.greeting=function(){
        console.log(`Hello, my name is ${this.name}!`);
    }
}
let user=new User('Jack')
user.greeting()
let user_2=new User('Max')
user_2.greeting()

function Person(name){
    this.name=name;
}
let person=new Person('Alice')
console.log(person.name);

function Person(name, age){
    this.name=name;
    this.age=age;
    this.greeting=function(){
        console.log(`Hello, my name is ${this.name}, i'm ${this.age} years old`);
    }
}
let person=new Person('Alice', 20)
console.log(person.name);
console.log(person.age);
person.greeting()

function Employee(name, position){
    this.name=name;
    this.position=position;
    this.who=function(){
        console.log(`My name is ${this.name} and i'm a ${this.position}`);
    }
}
let empl_1=new Employee('Danila','frontend developer')
empl_1.who()
let empl_2=new Employee('Alex', 'backend developer')
empl_2.who()
*/ 


//   SYMBOL
/*
let id_1=Symbol('id_1')
console.log(id_1.toString());
console.log(id_1.description);

let user={
    name: 'Connor',
    age: 103,
}
let id_1=Symbol('id_1')

user[id_1]=1

console.log(user[id_1]);

console.log(user);

let id=Symbol('id')
let user={
    name: 'Connor',
    age: 103,
    [id]: 123
}
let id_1=Symbol('id_1')
user[id_1]=1
console.log(user);

let globalS=Symbol.for('name')
console.log(globalS.description);

let symbol=Symbol('symbol')
console.log(symbol);
console.log(symbol.toString());
console.log(symbol.description);

let id=Symbol('id')
let ip=Symbol('ip')
let user={
    age: 20,
    name: 'Stepan',
    [ip]: true
}
user[id]=id;
console.log(user[id]);
console.log(user[ip]);

let id=Symbol('id')
let user={
    age: 20,
    name: 'Stepan',
    [id]: true
}
for (const key in user) {
    console.log(key);
}
console.log(user[id]);
let clone=Object.assign({}, user)
console.log(user);

let id=Symbol.for('id')
let idClone=Symbol.for('id')
console.log(id.description);
console.log(idClone.description);
console.log(id===idClone);
*/


//   OBJECTS COMRARISON AND OPERATIONS
/*
let obj_1={
    name: 'Stepan',
    age: 20
}
let obj_2={
    f: true,
    s: false
}
console.log(obj_1-obj_2);
console.log(obj_1+obj_2);
console.log(obj_1*obj_2);
console.log(obj_1/obj_2);
console.log(obj_1==obj_2);
alert(obj_1)
alert(obj_2)

let obj_1={
    f: 31,
    s: 20
}
let obj_2={
    f: 24,
    s: 76
}
console.log(obj_1-obj_2);
console.log(obj_1+obj_2);
console.log(obj_1*obj_2);
console.log(obj_1/obj_2);
alert(obj_1)
alert(obj_2)
*/


//   NUMBERS
/*
let a=1000000000
let b=1_000_000_000
console.log(a===b);

let c=1e9
console.log(c===a);

let d=7.3e9
console.log(d);

let e=0.000001
let f=1e-6
console.log(e===f);

console.log(0xff===0xFF);

let h=0b11111111
let g=0o377
console.log(h===g);

console.log(a.toString(16));
console.log(a.toString(36));
console.log(a.toString(2));
console.log(a.toString(10));

console.log(Math.floor(3.3));
console.log(Math.floor(-2.1));

console.log(Math.ceil(4.1));
console.log(Math.ceil(-2.1));

console.log(Math.round(3.3))
console.log(Math.round(-3.3))

console.log(Math.trunc(3.3))
console.log(Math.trunc(-2.3))

let k=12.43
console.log(k.toFixed(4));

let y=12.46
console.log(y.toFixed(1));

let r=0.1+0.2
console.log(r);
console.log(r.toFixed(2));
console.log(+r.toFixed(2));

console.log(isNaN('aboba'));
console.log(isNaN(NaN));
console.log(isNaN(3));

console.log(isFinite(2e500));
console.log(isFinite(2));
console.log(isFinite('3'));
console.log(isFinite(''));
console.log(isFinite('gobar'));

console.log(Object.is(NaN, NaN));

console.log(parseInt("19$"));
console.log(parseFloat('2.3px'));
console.log(parseFloat('2.3.8.7'));
console.log(parseInt("19.2"));

console.log(parseInt('0xff',16));

let a=+prompt('a',0)
let b=+prompt('b',0)
console.log(a+b);

function readNumber(){
    let num;

    do {
        num=prompt('Enter number', 0)
    } while (!isFinite(num))

    if(num===null || num==='') {
        return null
    }

    return +num
}
console.log(readNumber());

console.log(Math.random()*10);

console.log(Math.trunc(Math.random()*10));

let population=8e9
console.log(population);
let a=7.3e9;
console.log(a);
console.log(a+population);

console.log(7e500)

let mcs=1e-6
console.log(mcs);

let num=13
console.log(num.toString(16));
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(36));

let num=2.1
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.trunc(num));

let fNum=31.2345
console.log(+fNum.toFixed(2));
console.log(fNum.toFixed(10));

let sum=0.1+0.2;
console.log(sum.toFixed(2));

let num=21
let str='bla'
let empt=''
let inf=Infinity
console.log(isNaN(str));
console.log(isFinite(inf));
console.log(isFinite(num));
console.log(isFinite(empt));
console.log(isFinite(str));

let num=21
let str='bla'
let empt=''
let inf=Infinity
console.log(Number.isFinite(empt));
console.log(Number.isFinite(num));
console.log(Number.isFinite(str));
console.log(Number.isFinite(inf));
console.log(Number.isNaN(str));

function toBinary(n){
    console.log(n.toString(10));
}
toBinary(0o101110)

function toAll(n){
    console.log(n.toString(2));
    console.log(n.toString(16));
    console.log(n.toString(8));
}
toAll(13)

function randomNum(){
    console.log(Math.round(Math.random()*1000));
}
randomNum()

function zerosPart(n,limit){
    console.log(n.toFixed(limit));
}
zerosPart(31.544646767,2)

let a=NaN
let b=NaN
console.log(Object.is(a,b)); // === but with NaN and 0, -0

let usd='10.25$'
console.log(parseInt(usd));
console.log(parseFloat(usd));

let color='0xff'
console.log(parseInt(color, 16));
let bi=01011
console.log(parseInt(bi,10));

console.log(Math.pow(2,3));

function findMax(arr){
    console.log(Math.max.apply(null, arr));
}
findMax([-1,0,2,4,5,76,9,31])

function findMin(arr){
    console.log(Math.min.apply(null, arr));
}
findMin([-1,0,2,4,5,76,9,31])

function naturalNum(n){
    if(n>0 && Math.floor(n)===n){   //let num=3;
                                    //let num=3.2;
                                    //console.log(Math.floor(num)===num);
        console.log(true);
    } else{
        console.log(false);
    }
}
naturalNum(3.2)
naturalNum(3.2324)
naturalNum(-1)
naturalNum(3)
*/



//   STRINGS
/*
let str='Hello!'
console.log(str[0]);
console.log(str.at(1));
console.log(str.at(-1));

console.log(str.indexOf('l'));
console.log(str.lastIndexOf('l'));

console.log(str.includes('He'));
console.log(str.includes('no'));

console.log(str.startsWith('H'));
console.log(str.endsWith('!'));

console.log(str.slice(0,4));
console.log(str.slice(0,));
console.log(str.slice(3,));

console.log(str.substring(4,0));
console.log(str.substring(0,4));

console.log(str.substr(0,2));

console.log(str[0]);

console.log('a'.codePointAt(0));
console.log('A'.codePointAt(0));

console.log(String.fromCodePoint(75));

let str=''
for (let index = 20; index < 200; index++) {
    str+=String.fromCodePoint(index)
    
}
console.log(str);

console.log('obama'.localeCompare('putin'));

function returnUpperCase(str) {
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(returnUpperCase('sosatel')
);

function checkSpam(str) {
    let lowerStr=str.toLowerCase()
    return lowerStr.includes('xxx') || lowerStr.includes("viagra") 
}
console.log(checkSpam('cock viagra'));
console.log(checkSpam('cock XxX ViAgrA'));

function slicer(str, maxlength) {
    if(str.length>maxlength) {
        return str.slice(0, maxlength - 1) + "..."
    } else {
        return str
    }
}
console.log(slicer("suckerscockeresdjfjdjf",10));
console.log(slicer("sucffgjdjf",10));

function extractValue(str) {
    return +str.slice(1)
}
console.log(extractValue('$1245'));

function lengthKnowledge(str) {
    return str.length
}
console.log(lengthKnowledge("abobas"));

function firstKnowledge(str) {
    return str[0]
}
console.log(firstKnowledge("abobas"));

function concatenation(str, str2) {
    return str + str2
}
console.log(concatenation("abobas", "amogas"));

function riseRise(str) {
    return str.toUpperCase()
}
console.log(riseRise("abobas"));

function getDown(str) {
    return str.toLowerCase()
}
console.log(getDown("COCOS"));

function replacer(str) {
    return str.replace(/a/g, 'b')
}
console.log(replacer('aboba'));

function starts(str, startValue) {
    return str.startsWith(`${startValue}`)
}
console.log(starts("aboba","a"));

function ends(str, startValue) {
    return str.endsWith(`${startValue}`)
}
console.log(ends("aboba","a"));

console.log('Here is a \\');

let str='blablalblalbal'
console.log(str.length);
console.log(str[0]);
console.log(str.at(2));

let str='blablalblalbal'
console.log(str[str.length-1]);
console.log(str.at(-1));

let str='blablalblalbal'
console.log(str.toUpperCase());
console.log(str[0].toUpperCase()+str);

let str='Widget with id and ge'
console.log(str.indexOf('id'));
console.log(str.indexOf('id', 2));
console.log(str.indexOf('Id'));
console.log(str.indexOf('ge'));
console.log(str.indexOf('ge', 4));

let str='Widget with id and ge'
console.log(str.lastIndexOf('ge'));
console.log(str.lastIndexOf('ge', 18));
console.log(str.lastIndexOf('id'));
console.log(str.lastIndexOf('id', 11));

let str='Widget with id and ge'
console.log(str.includes('id'));
console.log(str.includes('ID'));
console.log(str.includes('id', 2));

let str='Widget with id and ge'
console.log(str.startsWith('WI'));
console.log(str.startsWith('Wi'));
console.log(str.endsWith('ge'));

let str='Widget with id and ge'
console.log(str.slice(0,6));
console.log(str.substr(0,6));
console.log(str.substring(0,6));

console.log('a'>'A');
console.log('a'.codePointAt(0));
console.log('A'.codePointAt(0));

console.log(String.fromCharCode(65));
console.log(String.fromCharCode(97));

let str='agdjsfdjA'
console.log(str.codePointAt(0));

let str1='Aboba'
let str2='aboba'
console.log(str1>str2);
console.log(str1<str2);
console.log(str1===str2);
console.log(str1==str2);

let str='gdopfgodog'
console.log(str.repeat(10));

let str='Рузкы';
let str2='England'
console.log(str.localeCompare(str2));

let str='Hello World!'
console.log(str.length);

let str1='dodo';
let str2='pizza';
console.log(str1.concat(str2));

let str='dgddjgfj'
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

let str='Hello World!'
console.log(str.slice(0,5));

let str='Hello World!'
console.log(str.indexOf('d'));

let str='Hello World!'
console.log(str.includes('World'));

let str='Hello World!'
console.log(str.split('World!').join('Peoples.'));
function replaceThings(str, find, replace){
    console.log(str.split(find).join(replace)); 
}
let a='So i am a human.'
replaceThings(a, 'a human.', 'an AI.')

let str='Hello World!'
console.log(str.split(' '));
console.log(str.split(' ').join(', '));

let str='Hello World!'
console.log(str.startsWith('Hello'));
console.log(str.endsWith('!'));

let str='Hehe'
console.log(str.repeat(10));

function deleteSpace(str){
    if(str[0]===' ' && str[str.length-1]===' '){
        console.log(str.replace(' ', ''));
    } else{
        console.log("It's normal");
    }
}
deleteSpace(' withspace ')
deleteSpace('withoutspace');

function cutStr(str){
    if(str.length>=10){
        console.log(str.substr(0, 10)+ '...');
    } else{
        console.log("It's fine.");
    }
}
cutStr('hereismorethantencharacters')
cutStr('hereisnot')

function returnLength(str){
    console.log(str.length);
}
returnLength('srfdggfgf')

function capitalizeFirstLEtter(str){
    let capitilized=str[0].toUpperCase();
    console.log(capitilized+str.substr(1));
}
capitalizeFirstLEtter('donkeymonkey')

function splitToArr(str){
    console.log(str.split(''));
}
splitToArr('splittoarrayofsimbols')

let str=' gfgfgfgfg '
console.log(str);
console.log(str.trim());

function reverseStr(str){
    console.log(str.split("").reverse().join("")); 
}
reverseStr('sausage')

function onlyStrings(str){
    if(Number(str)){
        console.log(false);
    } else{
        console.log(true);
    }
}
onlyStrings('suction')
onlyStrings('32456')

function onlyNums(str){
    if(Number(str)){
        console.log(true);
    } else {
        console.log(false);
    }
}
onlyNums('12345')
onlyNums('suction')

function concatStrings(str1,str2){
    console.log(str1+" ".concat(str2));
}
concatStrings('I AM', 'ALIVE')

function toLower(str){
    console.log(str.toLowerCase());
}
toLower('DFJDJFDJF')

function toUpper(str){
    console.log(str.toUpperCase());
}
toUpper('jfjfjfjfjf')

function lengthCompare(str1,str2){
    if(str1.length>str2.length){
        console.log(`${str1} is LONGER`);
    } else if(str1.length<str2.length){
        console.log(`${str2} is LONGER`);
    } else if(str1.length==str2.length){
        console.log(`${str1} and ${str2} are EQUAL`);
    }
}
lengthCompare('aboba', 'abiba')
lengthCompare('jdjskskd','jio')

function deletePunctuation(str){
    console.log(str.split(', ').join(' '));
}
deletePunctuation('So, i am, adding, punctuation.')

function annagramm(str1, str2){
    if(str1===str2){
        console.log(true);
    } else {
        console.log(false);
    }
}
annagramm('abiba', 'aboba')
annagramm('abiba', 'abiba')
*/



//   ARRAYS
/*
let array=new Array()
let array_1=[]

let array=['a','b','c']
console.log(array);
console.log(array[0]);

array[2]='v'
console.log(array);

array[3]='newbie'
console.log(array);

console.log(array.length);

let arr=['microsoft',{name: 'Me'}, true, false, ()=>{alert('I wanna work on yoooouuuu!!!')}]
alert(arr[1].name)
arr[4]()

let array=['a','b','c']
console.log(array.at(-1));
console.log(array.at(0));

let array=['a','b','c']
console.log(array.pop());
console.log(array);

let array=['a','b','c']
array.push('d');
array.push('e','f')
console.log(array);

let array=['a','b','c']
console.log(array.shift());
console.log(array);

array.unshift('e')
console.log(array);

array.unshift('f','g')
console.log(array);

let array=['a','b','c']

let arr=array

console.log(arr);
console.log(array);
console.log(arr===array);

arr.push('d')

console.log(arr);
console.log(array);
console.log(arr===array);

let array=['a','b','c']
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

let array=['a','b','c']
for(let arr in array) {
    console.log(arr);
}

let array=['a','b','c']
array.length=1
console.log(array);
array.length=3
console.log(array);

let matrix=[
    [1,2,3],
    [4,5,6]
]
console.log(matrix[0][1]);

let music=['rap', 'phonk']
music.push('rock')

console.log(music);
console.log(music.shift(0));
console.log(music);

music.unshift('reggae','metal')
console.log(music);

let arr=['Apple', 'Orange', 'Banana']
console.log(arr[0]);

let arr=['Apple', 'Orange', 'Banana']
arr[2]='Watermelon'
console.log(arr[2]);

let arr=['Apple', 'Orange', 'Banana']
arr[3]='Pineaple'
console.log(arr);
console.log(arr.length);

let arr=['Apple', {name: 'Stepan', age: 20}, true, false, function hello(){return 'Hello pips.'}]
console.log(arr[1].name);
console.log(arr[1].age);
console.log(arr[4]());
console.log(arr[2]);
console.log(arr[3]);
console.log(arr.at(-1)());

let arr=['Apple', 'Orange', 'Banana']
arr.push('Popalopa')
console.log(arr);

let arr=['Apple', 'Orange', 'Banana']
arr.shift()
console.log(arr);

let arr=['Apple', 'Orange', 'Banana']
let deleted=arr.pop()
console.log(arr);
console.log(deleted);

let arr=['Apple', 'Orange', 'Banana']
let deleted=arr.shift()
console.log(arr);
console.log(deleted);

let arr=['Apple', 'Orange', 'Banana']
arr.push('Watermelon', 'Melon', 'Avocado', 'Coffee')
console.log(arr);

let arr=['Apple', 'Orange', 'Banana']
arr.unshift('Watermelon', 'Melon', 'Avocado', 'Coffee')
console.log(arr);

let arr=['Apple', 'Orange', 'Banana']
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

let arr=['Apple', 'Orange', 'Banana']
for (const ar of arr) {
    console.log(ar);
}

let matrix=[
    [1,2,3],
    [4,5,6]
]
console.log(matrix[0][1]);

let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(arr.length);
*/



//   ARRAY METHODS
/*
let array=['i','love','web']
console.log(array);
array.splice(0,1)
console.log(array);

let array_1=['i','love','web','i','study','now']
console.log(array_1);
array_1.splice(0,3, 'i','cant')
console.log(array_1);

let array_1=['i','love','web','i','study']
console.log(array_1);
array_1.splice(5,0, 'JS','right','now')
console.log(array_1);

let array_1=['i','love','web','i','study']
console.log(array_1.slice(0,2));
console.log(array_1);

let array_2=array_1.slice()
console.log(array_2);

let array=[1,2]
console.log(array);
console.log(array.concat(3,4));
console.log(array.concat([3,4],[5,6]));
console.log(array.concat([3,4],[5,6],7,8));

let array=[1,2]
let obj={
    name: 'silvester',
    secondName: 'stallone'
}
console.log(array.concat(obj));

let array=['entony', 'steve']
array.forEach(alert)

let peoples=['entony', 'steve','marcus','herman','pete']
peoples.forEach((item, index, array)=>{
    alert(`${item} has index ${index} in ${array}`)
})

let peoples=['entony', 'steve','marcus','herman','pete']
console.log(peoples.indexOf('steve'));
console.log(peoples.indexOf('marshall'));
console.log((peoples.includes('pete')));
console.log((peoples.includes('marshall')));

let users=[
    {id:1, name: 'John'},
    {id:2, name: 'Mack'},
    {id:3, name: 'Soap'}
]
let user=users.find(item=>item.id==3)
console.log(user.name);

let result=['Soap','Mack','John']//.map(item=>item.length)
let lengths=result.map(item=>item.length)
console.log(lengths);

let nums=[1,2,3,45,4,5,6]
nums.sort()
console.log(nums);

function compareOrder(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}

nums.sort(compareOrder)
console.log(nums);

let nums=[1,2,3,4,5]
console.log(nums);
nums.reverse()
console.log(nums);

let names='Soap, Mack, John';
let name_1=names.split(',')
let name_2=names.split(', ')
let name_3=names.split('')

console.log(name_1);
console.log(name_2);
console.log(name_3);

let names=['Soap', 'Mack', 'John']
let names_4=names.join('/sas/')
console.log(names_4);

function camelize(str) {
    return str
    .split('-')
    .map(
        (word, index) => index == 0 ? word:word[0].toUpperCase() + word.slice(1)
    )
    .join('')
}
console.log(camelize('background-color'));

for(let char of 'test') {
    console.log(char);
}

let arr=['Apple', 'Orange', 'Banana','Watermelon', 'Melon', 'Avocado', 'Coffee']
let deleted=arr.splice(0, 3, 'Milk', 'Sausage', 'Beans')
console.log(deleted);
console.log(arr);

let arr=['Apple', 'Orange', 'Banana','Watermelon', 'Melon', 'Avocado', 'Coffee']
arr.splice(2, 0, 'Egg')
console.log(arr);

let arr=['Apple', 'Orange', 'Banana','Watermelon', 'Melon', 'Avocado', 'Coffee']
console.log(arr);
let arr2=arr.slice()
console.log(arr2);
console.log(arr==arr2);

let arr=['Apple', 'Orange', 'Banana','Watermelon', 'Melon', 'Avocado', 'Coffee']
let arr2=['Sausage','Egg','Pie','Cream']
let arr3=arr.concat(arr2)
console.log(arr3);

let arr=['Apple', 'Orange', 'Banana','Watermelon', 'Melon', 'Avocado', 'Coffee']
arr.forEach(alert)

let arr=['Apple', 'Orange', 'Banana','Watermelon', 'Melon', 'Avocado', 'Coffee']
arr.forEach((item,i,array)=>{
    console.log(`${item} on position ${i} in ${array}`);
})

let arr=['Apple', 'Orange', 'Banana','Watermelon', 'Melon', 'Avocado', 'Coffee']
arr.forEach((item)=>{
    console.log(item);
})

let arr=['Apple', 'Orange', 'Banana','Watermelon', 'Melon', 'Avocado', 'Coffee']
arr.forEach(function (item, index){
    console.log(item, index);
})

let arr=['Apple', 'Orange', 'Banana','Watermelon', 'Melon', 'Avocado', 'Coffee']
console.log(arr.indexOf('Banana'));
console.log(arr.includes('Apple'));

let arr=[
    {age: 27, name: 'Andrew'},
    {age: 20, name: 'Stepan'},
    {age: 999, name: 'SomeDude'},
]
let user=arr.find(item=>item.age==20)
console.log(user);
console.log(user.age);
console.log(user.name);

let arr=[
    {age: 27, name: 'Andrew'},
    {age: 20, name: 'Stepan'},
    {age: 999, name: 'SomeDude'},
    {age: 27, name: 'Andrew'},
]
let user=arr.findIndex(item=>item.age==20)
console.log(user);
console.log(user.age);
console.log(user.name);

let arr=[
    {age: 27, name: 'Andrew'},
    {age: 20, name: 'Stepan'},
    {age: 999, name: 'SomeDude'},
    {age: 27, name: 'Andrew'},
]
let user1=arr.findIndex(item=>item.age===27)
console.log(user1);
let user2=arr.findLastIndex(item=>item.age===27)
console.log(user2);

let arr=[
    {age: 27, name: 'Andrew'},
    {age: 20, name: 'Stepan'},
    {age: 999, name: 'SomeDude'},
]
let yongerUsers=arr.filter(item=>item.age<999)
console.log(yongerUsers);

let arr=['Apple', 'Orange', 'Banana','Watermelon', 'Melon', 'Avocado', 'Coffee'];
let mapped=arr.map(item=>item.length);
console.log(mapped);

let arr=['Apple', 'Orange', 'Banana','Watermelon', 'Melon', 'Avocado', 'Coffee'];
let mapped=arr.map(item=>item.toLowerCase());
console.log(mapped);

function compare(a,b){
    if(a>b){
        return 1
    } else if(a<b){
        return -1
    } else if(a==b){
        return 0
    }
}
let arr=[1,2,4,6,7,8,45,67,32,13]
console.log(arr.sort(compare));
let strArr=['gob', 'dog', 'Sod']
console.log(strArr.sort(compare));

let arr=[1,2,4,6,7,8,45,67,32,13]
console.log(arr.reverse());

let names = 'Вася, Петя, Маша';
console.log(names.split(', '));

let names = 'Вася, Петя, Маша';
let arr=names.split(', ')
for (const name of arr) {
    console.log(`${name} will get a message`);
}

let names = 'Вася, Петя, Маша';
console.log(names.split(', ', 1));

let arr=['Alex', 'Jack', 'Ken']
console.log(arr.join(', '));

let arr=[]
let fakeArr={}
console.log(Array.isArray(arr));
console.log(Array.isArray(fakeArr));

let arr1=['first']
let arr2=['second']
concattedArr=arr1.concat(arr2)
console.log(concattedArr);

let arr=[1,2,3,4,5,6,7,8,9,10]
let sum=0
for (let item of arr) {
    sum+=item
}
console.log(sum);

let arr=[1,2,3,4,5,6,7,8,9,10]
if(arr[3]==4){
    console.log(true);
}

let arr=['Alex', 'Jack', 'Ken']
if(arr[1]=='Jack'){
    console.log('Hi, bud!');
}

let arr=['Alex', 'Jack', 'Ken']
console.log(arr.reverse());

let arr=[23,1,4,6,7,8,2,3,5]
function sortToBigger(a,b){
    if(a>b) return 1;
    if(a<b) return -1;
    if(a==b) return 0
}
console.log(arr.sort(sortToBigger));

let arr=[1,2,3,4,5,6,7,8,9,10]
let evenArr=[]
arr.forEach(element => {
    if(element%2===0){
        evenArr.push(element)
    }
});
console.log(evenArr);

let objArr=[
    {id: 1, age: 10},
    {id: 2, age: 20},
    {id: 3, age: 30},
    {id: 4, age: 40},
]
let finded=objArr.find(item=>item.id==2)
console.log(finded);

let objArr=[
    {id: 1, age: 10},
    {id: 2, age: 20},
    {id: 3, age: 30},
    {id: 4, age: 40},
]
let sortedArr=[];
function ageSort(item){
    if(item.age<40){
        sortedArr.push(item)
        return sortedArr
    }
}
objArr.forEach(ageSort)
console.log(sortedArr);

let objArr=[
    {id: 1, capital: 10},
    {id: 2, capital: 20},
    {id: 3, capital: 30},
    {id: 4, capital: 40},
]
let sum=0;
function sumObjQualities(item){
    sum+=item.capital
}
objArr.forEach(sumObjQualities)
console.log(sum);

let obj=[
    {id:3, caps: 350},
    {id:5, caps: 30},
    {id:2, caps: 50},
    {id:1, caps: 35},
    {id:6, caps: 120},
    {id:4, caps: 10},
]
function sortToBigger(a,b){
    if(a.id>b.id){
        return 1
    } else if(a.id<b.id){
        return -1
    } else{
        return 0
    }
}
let sorted=obj.sort(sortToBigger)
console.log(sorted);

let obj=[
    {id:3, caps: 350},
    {id:5, caps: 30},
    {id:2, caps: 50},
    {id:1, caps: 35},
    {id:6, caps: 120},
    {id:4, caps: 10},
]
let mapped=[]
function makeObjQualToArr(item){
     mapped.push(item.caps)
     return mapped
}
obj.map(makeObjQualToArr)
console.log(mapped);

let obj=[
    {id:3, caps: 350},
    {id:5, caps: 30},
    {id:2, caps: 50},
    {id:1, caps: 35},
    {id:6, caps: 120},
    {id:4, caps: 10},
]
obj=obj.map(item=>item.caps)
console.log(obj);

let nums=[0,1,2,3,4,5,6,7,8,9]
nums=nums.map(item=>item*2)
console.log(nums);

let nums=[0,1,2,3,4,5,6,7,8,9]
let subArr=nums.slice(0,3)
console.log(subArr);

let nums=[0,1,2,3,4,5,6,7,8,9]
nums.forEach((item)=>{
    console.log(item);
})

let nums=[0,1,2,3,4,5,6,7,8,9]
nums.filter((item)=>{
    if(item<=5){
        console.log(item);
    } else{
        console.log('Hogher than 5');
    }
})

let nums=[0,1,2,3,4,5,6,7,8,9]
console.log(nums.find(item=>item==3));

let obj=[
    {id:3, caps: 350},
    {id:5, caps: 30},
    {id:2, caps: 50},
    {id:1, caps: 35},
    {id:6, caps: 120},
    {id:4, caps: 10},
]
let richRich=obj.find(item=>item.caps==350)
console.log(richRich);
console.log(richRich.caps);
console.log(richRich.id);

let arr=[
    [43, 23],
    [21, 13],
    [3, 5]
]
console.log(arr[1][0]);

let arr=[
    [43, 23],
    [21, 13],
    [3, 5]
]
let result=[].concat(arr[0], arr[1], arr[2])
console.log(result);

let arr=[
    [43, 23],
    [21, 13],
    [3, 5]
]
let process=arr.forEach(item=>{
    console.log(item[0]+item[1]);
})

let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
let arr3=[]
arr3[0]=arr1;
arr3[1]=arr2
console.log(arr3);

let arr=[1,2,3,4,5]
let sum=0
arr.forEach(item=>{
    sum+=item
})
console.log(sum);

let arr=[12,13,12,2,2,3,4,5,6]
let uniqueArr=arr.filter(function(item, pos){
    return arr.indexOf(item)==pos;
})
console.log(uniqueArr);

let arr=['first','second','third','second']
console.log(arr.indexOf('second'));
console.log(arr.lastIndexOf('second'));

let objArr=[
    {id:3, caps: 350},
    {id:5, caps: 30},
    {id:2, caps: 50},
    {id:1, caps: 35},
    {id:6, caps: 120},
    {id:4, caps: 10},
]
let owner=objArr.find(item=>item.id==1)
console.log(owner);

let objArr=[
    {id:3, caps: 350},
    {id:5, caps: 30},
    {id:2, caps: 50},
    {id:1, caps: 35},
    {id:6, caps: 120},
    {id:4, caps: 10},
    {id:1, caps: 35}
]
let first=objArr.findIndex(item=>item.id==1)
let secondFirst=objArr.findLastIndex(item=>item.id==1)
console.log(first);
console.log(secondFirst);

let objArr=[
    {id:3, caps: 350},
    {id:5, caps: 30},
    {id:2, caps: 50},
    {id:1, caps: 35},
    {id:6, caps: 120},
    {id:4, caps: 10},
    {id:1, caps: 35}
]
let finded=objArr.find(item=>item.caps<350)
console.log(finded);
let filtered=objArr.filter(item=>item.caps<350)
console.log(filtered);

let objArr=[
    {id:3, caps: 350},
    {id:5, caps: 30},
    {id:2, caps: 50},
    {id:1, caps: 35},
    {id:6, caps: 120},
    {id:4, caps: 10},
    {id:1, caps: 35}
]
let leader=objArr.find(item=>item.caps==350)
console.log(leader);

let objArr=[
    {id:3, caps: 350},
    {id:5, caps: 30},
    {id:2, caps: 50},
    {id:1, caps: 35},
    {id:6, caps: 120},
    {id:4, caps: 10},
    {id:1, caps: 40}
]
let filtered=objArr.filter(item=>item.caps<100)
console.log(filtered);

let arr=['pUnIshEr111','usER01','GomBAboB71']
let mapped=arr.map(item=>item.toLocaleLowerCase())
console.log(mapped);

let arr=['pUnIshEr111','usER01','gomBAboB71','jojo','jj']
let mapped=arr.map(item=>item[0].toUpperCase()+item.slice(1).toLowerCase())
console.log(mapped);
console.log(mapped.join(', '));

let arr=['pUnIshEr111','usER01','gomBAboB71','jojo','jj','aboba','bob','ciri']
arr.sort()
console.log(arr);

let nums=[1,4,5,2,3,6,8,7,9]
nums.sort()
console.log(nums);

let nums=[1,2,15]
nums.sort()
console.log(nums);
function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(b>a) return -1
}
nums.sort(compare)
console.log(nums);

let nums=[1,2,15]
nums.reverse()
console.log(nums);

let str='Pete, Miles, Gwen';
let splittedToArr=str.split(', ')
console.log(splittedToArr);
let joined=splittedToArr.join(', ')
console.log(joined);

let str='Pete, Miles, Gwen';
let splittedToArr=str.split(',', 1)
console.log(splittedToArr);

console.log(Array.isArray({}));
console.log(Array.isArray([]));

let nums=[0,1,2,3,4, 5, 14, 9,-13]
console.log(nums.indexOf(-13));

let nums=[0,1,2,3,4, 5, 14, 9,-13]
let limit=-13;
nums=nums.filter(num=>num!==limit)
console.log(nums);

let nums=[0,1,2,3,4, 5, 14, 9,-13]
nums.forEach(item=>{
    if(item%3===0){
        console.log( item);
    }
})

let arr=['name1','nade2','nafe3']
arr.forEach(item=>{
    if(item.includes('am')){
        console.log(item);
    }
})

let objArr=[
    {id:3, caps: 350},
    {id:5, caps: 30},
    {id:2, caps: 50},
    {id:1, caps: 35},
    {id:6, caps: 120},
    {id:4, caps: 10},
    {id:1, caps: 40}
]
let limitValue=30;
objArr=objArr.filter(value=>value.caps>limitValue)
console.log(objArr);

let arr=['1','2','3','4','5'];
let mapped=arr.map(item=>Number(item))
console.log(mapped);

let nums=[1,2,3,4,5]
let mapped=nums.map(item=>item.toString())
console.log(mapped);

let nums=[1,2,3,4,5]
let numsX2=nums.map(item=>item*item)
console.log(numsX2);

let objArr=[
    {id:3, num: 350},
    {so:5, da: 30},
    {cvbc:2, gn: 50},
    {cv:1, jg: 35},
    {op:6, er: 120},
    {kl:4, qw: 10},
]
let mergedObj={};
for(let item of objArr){
    Object.assign(mergedObj, item)
}
console.log(mergedObj);

let arr=[1,2,3,4,5,6,7,8,9,10]
function sumArr(arr){
    let sum=0;
    arr.forEach(item => {
        sum+=item;
    });
    console.log(sum);
}
sumArr(arr)

let arr=['i','am','fugin','tired']
function concatArrEls(arr){
    let concated=arr.join(' ')
    console.log(concated);
}
concatArrEls(arr)

let arr=[1,2,3,4,5,6,7,8,9,10]
function averageOfNums(arr){
    let startingValue=0;
    arr.forEach(item => {
        startingValue+=item;
    });
    let result=startingValue/arr.length
    console.log(result);
}
averageOfNums(arr)

let arr=['i','am','fugin','tired'];
function longestStr(array){
    let maxStrLength=0;
    for (let index = 0; index < array.length; index++) {
       if(array[index].length>maxStrLength){
        maxStrLength=array[index].length;
       }
    }
    return maxStrLength
}
console.log(longestStr(arr));

let arr=[34,13,45,1,98,3,-21]
function smallestNum(array){
    let smallest=0;
    for (let index = 0; index < array.length; index++) {
        if(array[index]<smallest){
        smallest=array[index]
       }
    }
    return smallest
}
console.log(smallestNum(arr));

let arr=['i','am','still','fighting','and','i','workout','good','today'];
function takeFirstChar(array){
    let charArr=[];
    for (let index = 0; index < array.length; index++) {
        charArr.push(array[index][0])
    }
    return charArr
}
console.log(takeFirstChar(arr));

let arr=[1,2,3,4,5,6,7,8,9,10]
function multiplyByTwo(array){
    let multiplied=[];
    array.forEach(item => {
        multiplied.push(item*2)
    });
    return multiplied
}
console.log(multiplyByTwo(arr));

let arr=['i','am','still','fighting','and','i','workout','good','today'];
function toUpper(array){
    let uppered=[];
    array.forEach(element => {
        uppered.push(element.toUpperCase())
    });
    return uppered
}
console.log(toUpper(arr));

let arr=[
    [1,2,3],
    [4,5,6]
]
function concatSubArrs(array){
    let concatedArr=[];
    for (let index = 0; index < array[0].length; index++) {
        for (let i = 0; i < array.length; i++) {
            concatedArr.push(array[i][index])
            concatedArr.sort(function compare(a,b){
                if(a>b) return 1;
                if(a==b) return 0;
                if(b>a) return -1;
            })
        }
    }
    return concatedArr
}
console.log(concatSubArrs(arr));

let arr=[1,2,3,4,5,6,7,8,9,10]
function onlyOdd(array){
    array.forEach(element => {
        if(element%2!==0){
            console.log(element);
        }
    });
}
console.log(onlyOdd(arr));

let arr=['i','am','still','fighting','and','i','workout','good','today'];
function greaterThan(array, limit){
    array.forEach(element => {
        if(element.length>limit){
            console.log(element);
        }
    });
}
greaterThan(arr, 5)

let arr=[90,11,13,54,21,43,5,67,13]
function firstOccurance(array, given){
    let result=array.indexOf(given)
    return result
}
console.log(firstOccurance(arr, 13));

let strArr=['asos','sasus','sapog','asus']
console.log(firstOccurance(strArr, 'asus'));

let arr=[90,11,13,54,21,43,5,67,13]
let strArr=['asos','sasus','sapog','asus','asos']
function lastOccurance(array, given){
    let result=array.lastIndexOf(given);
    return result
}
console.log(lastOccurance(arr, 13));
console.log(lastOccurance(strArr, 'asos'));

let arr=[90,11,13,54,21,43,5,67,13]
function onlyEvens(array){
    let even=[]
    array.forEach(element => {
        if(element%2===0){
            even.push(element)
        }
    });
    return even
}
console.log(onlyEvens(arr));
*/



//   MAP, SET
/*
let test=new Map()
test.set('key_1', 13)

console.log(test);

console.log(test.has('key_1'));
console.log(test.get('key_1'));

console.log(test.size);

test.set(1,3)
    .set(2,4)
    .set(true,5)
console.log(test);

let a=test.keys()
console.log(a);

let b=test.values()
console.log(b);

let c=test.entries()
console.log(c);

let test={
    name: "i'm",
    age: 20;
}
console.log(test);
let map=new Map(Object.entries(test))
console.log(map);

let recipe=Object.fromEntries([
    ["banana", 1],
    ["avocado", 2,]
])
console.log(recipe);

let guests=['john', 'simon', 'marcus', 'herman','john', 'marcus']

let set=new Set(guests)

set.add('anna')
console.log(set.size);

set.add('john')
console.log(set.size);

function unique(arr) {
    return new Set(arr)
}
console.log(unique(['john', 'simon', 'marcus', 'herman','john', 'marcus']));

function sumSalaries(salaries) {
    let sum=0
    for(let salary of Object.values(salaries)) {
        sum+=salary
    }
    return sum
}
let salaries = {
    "john": 10000,
    "pete": 3000,
    "marcus": 2850
  };
console.log(sumSalaries(salaries));
*/



//   DESTRUCTURING ASSIGNMENT
/*
let arr=['Rockstar','Sucker']
let [first, last]=arr
console.log(first);
console.log(last);

let [a,,b]=[1,2,3,4,5]
console.log(b);

let [a,b,c]='abc'
console.log(a);
console.log(b);
console.log(c);

let a='a'
let b='b'
console.log(a);
console.log(b);
[a,b]=[b,a]
console.log(a);
console.log(b);

let [n1,n2,...rest]=[12,3,4,5,4,6,57,8,89]
console.log(rest[0]);
console.log(rest[3]);
console.log(rest.length);

let [a='Strong',b='Anal']=['Rob']
console.log(a);
console.log(b);

let a={
    title: 'Rock',
    height: '2m+',
    strength: 'infinity...'
}
// console.log(title);
let{title, height, strength}=a
console.log(title);

let {height, width, title} = { title: "Menu", height: 200, width: 100 }
console.log(height);

let a={
    title: 'Rock'
}
let {strength='infinity...',height='2m+'}=a
console.log(strength);

let user={
    name: 'Herman',
    years: 23
}
let {name,years:age,isAdmin=false}=user
console.log(name);
console.log(age);
console.log(isAdmin);

function elementsReturn(arr) {
    let [el1,el2]=arr
    return [el1,el2]
}
console.log(elementsReturn(['ray','rob','bob','sob','nob','dob']));

let a=1
let b=2
console.log(a);
console.log(b);
[a,b]=[b,a]
console.log(a);
console.log(b);

let book={
    title: '1984',
    price: '5$'
}
let {title,price}=book
console.log(title);
console.log(price);

let user={
    name: 'Mack',
    age: '90'
}
function userData(obj) {
    let{name,age}=obj
    return `${name}: ${age}`
}
console.log(userData(user));
*/



//   DATE and time
/*
let now=new Date()
console.log(now);

let someday=new Date('2003-11-17')
console.log(someday);

let nowNow=new Date(2023,11)
console.log(nowNow);

let now=new Date()
console.log(now.getHours());
console.log(now.getUTCHours());

console.log(now.getTime());

let now=new Date()
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());

let a=new Date()
a.setMonth(1)
console.log(a);

let date=new Date(2023, 11, 32)
alert(date)

let date=new Date(2016, 1, 28)
date.setDate(date.getDate()+2)
console.log(date);

let date_1=new Date(2017, 1, 28)
date_1.setDate(date_1.getDate()+2)
console.log(date_1);

let date=new Date()
date.setSeconds(date.getSeconds()+5)
console.log(date);

let start=new Date()
for (let index = 0; index < 100000; index++) {
    let doSmt=index*index*index
}
let end=new Date()
console.log(`Loop is done for ${end-start} ms`);

let date=new Date(2012, 1, 20, 3, 12)
console.log(date);

function getWeekDayShort(date) {
    let days=['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    return days[date.getDay()] 
}
let date=new Date(2023, 11, 9)
console.log(getWeekDayShort(date));

function getEuDay(date) {
    let day=date.getDay()
    if(day===0) {
        day=7
    }
    return day
}
let date=new Date(2023, 11, 9)
console.log(getEuDay(date));

function getDateAgo(date, days) {
    let dateCopy=new Date(date)
    dateCopy.setDate(date.getDate()-days)
    return dateCopy.getDate()
}
let date=new Date(2023, 11, 9)
console.log(getDateAgo(date, 4));
console.log(getDateAgo(date, 365));

function getLastMonthDay(year, month) {
    let date=new Date(year, month+1, 0) //дата сама себя поправит; если передать 0, то это значение будет соответствовать «один день перед первым числом месяца»; «последнее число прошлого месяца».
    return date.getDate()
}
console.log(getLastMonthDay(2024, 1));

function getSecondsToTomorrow() {
    let now=new Date()
    let tomorrow=new Date(now.getFullYear(), now.getMonth(),  now.getDate()+1)
    let seconds=tomorrow-now
    return Math.round(seconds/1000)
}
console.log(getSecondsToTomorrow());

let now=new Date()

console.log(now);

console.log(now.getFullYear());

console.log(now.getMonth());

console.log(now.getDay());

let someday=new Date(2024, 3, 21)
console.log(someday);

console.log(someday.getDate());

console.log(someday.getHours());

console.log(someday.getMinutes());

console.log(someday.getSeconds());

console.log(someday.setFullYear(2025)
);
console.log(someday.getFullYear());

console.log(now>someday);

let diff=someday-now
console.log(diff);
*/



//   JSON, toJSON
/*
let user={
    name: 'Marcus',
    age: 20,
    courses:['html','css','js', 'react', '...'],
    isAdmin: true,
    wife: false
}

console.log(typeof user);

console.log(JSON.stringify(user_1, ['age','wife']));

let jsonUser=JSON.stringify(user)

console.log(typeof jsonUser);

console.log(jsonUser);

let user_1={
    name: 'Marcus',
    age: 20,
    courses:['html','css','js', 'react', '...'],
    isAdmin: true,
    wife: false
}

let user_2={
    name: 'Marcus',
    age: 20,
    courses:['html','css','js', 'react', '...'],
    isAdmin: true,
    wife: false
}

user_2.friends=user_1.wife
user_1.friends=user_2.wife

console.log(JSON.stringify(user_2));

let user_1={
    name: 'Marcus',
    age: 20,
    courses:['html','css','js', 'react', '...'],
    isAdmin: true,
    wife: false
}
console.log(JSON.stringify(user_1))
console.log(JSON.stringify(user_1, null, 2));

let nums="[1,2,3,4,5]"
console.log(nums);
nums=JSON.parse(nums)
console.log(nums);

let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user=JSON.parse(user)
console.log(user.name);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup=JSON.parse(str)
// console.log((meetup.date.getDate()));
let meetup=JSON.parse(str, function(key, value) {
    if(key=='date') return new Date(value)
    return value
})
console.log((meetup.date.getDate()));

let user = {
    name: "Dmitry",
    age: 35
};
console.log(JSON.stringify(user, null, 2));
let userBack=JSON.parse(JSON.stringify(user, null, 2))
console.log(userBack);
*/



//   RECURSION
/*
function pow(x,n) { 
    if(n===1) {
        return x
    } else {
        return x*pow(x, n-1)
    }
}
console.log(pow(2,4));

function pow_2_0(x,n){ // memory friendly
    let result=1
    for (let index = 0; index < n; index++) {
        result*=x
    }
    return result
}
console.log(pow_2_0(2,4));

let list={value:1}
list.next={value:2}
list.next.next={value:3}
console.log(list);
console.log(JSON.stringify(list));

function sum(n){
    if(n===1) {
        return 1
    } else {
        return n+sum(n-1)
    }
}
console.log(sum(3));
console.log(sum(10000));

function sum_2_0(n){
    let sum=0
    for (let index = 0; index <=n; index++) {
        sum+=index
    }
    return sum
}
console.log(sum_2_0(3));
console.log(sum_2_0(10000));

function factorial(n){ // n! = n*(n-1)
    if(n!=1){
        return n*factorial(n-1)
    } else {
        return 1
    }
}
console.log(factorial(5));

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
function listPrint(){
    console.log(list.value);
    if(list.next){
        listPrint(list.next)
    }
}
listPrint(list)
*/



//   SCOPE, CLOSURE
/*
{
    let a='155'
}
console.log(a);

{
    let a='155'
    console.log(a);
}

{
    let a='132'
    console.log(a);
}

for (let index = 0; index < 11; index++) {
    console.log(index);
}
console.log(index);

function makeCounter() {
    let count=0
    return function(){
        return count++
    }
}
let counter=makeCounter()
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

function sum(a){
    return (b)=>{
        return a+b
    }
}
console.log(sum(1)(2));
*/



//   FUNCTION OBJECT, NFE
/*
function say(){
    console.log('hohoho');
}
console.log(say.name);

console.log(say.length);

function a(){
    console.log('happy ny');
    a.counter++
}
a.counter=0
a()
a()
console.log(`a is called ${a.counter} times`);
*/



//   setTimeout, setInterval
/*
function a(){
    console.log('ho');
}
setInterval(a,1000)

function a(x, n){
   console.log(x+n);
}
setTimeout(a,1000,2,2)

function a(from, to) {
    let curr=from
    let timer=setInterval(function() {
        console.log(curr);
        if(curr==to) {
            clearInterval(timer)
        }
        curr++
    },1000)
}
a(1,10)
*/



//   GET, SET
/*
let chad={
    name: 'Giga',
    surname: 'Chad',

    get fullName() {
        return `${this.name} ${
            this.surname
        }`
    },

    set fullName(value) {
        [this.name, this.surname]=value.split(" ")
    }
}
console.log(chad.fullName);
chad.fullName="Bobr Kurwa"
console.log(chad.fullName);
console.log(chad.name);
*/



//   PROTOTYPES, INHERITANCE
/*
let user={
    age: 20
}
let admin={
    name: 'Stepan'
}
admin.__proto__=user
console.log(admin.age);

let a={
    a:true,
    walk(){
        alert('go')
    }
}
let b={
    b:true,
    __proto__: a
}
b.walk()

let a={
    a:true,
    walk(){
        alert('go')
    }
}
let b={
    b:true,
    __proto__: a
}
b.walk=function(){
    alert('NO')
}
b.walk()

let a={
    a:true,
    walk(){
        alert('go')
    }
}
let b={
    b:true,
    __proto__: a
}
for(let prop in b){
    console.log(prop);
}

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table

  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
console.log(pockets.pen);
*/



//   F.prototype
/*
let animal={
    eats: true
}

function Rabbit(name){
    this.name=name
}

Rabbit.prototype=animal

let rabbit=new Rabbit('Nigga') 

console.log(rabbit.eats);

function Rabbit(){
    
}
console.log(Rabbit.prototype.constructor==Rabbit);

let rabbit=new Rabbit()
console.log(rabbit.constructor==Rabbit);

let rabbit2=new rabbit.constructor()
console.log(rabbit2);
*/



//   EMBEDDED PROTOTYPES
/*
let obj={}
console.log(obj);

String.prototype.show=function(){
    alert(this)
}
'Sex'.show()

let obj={
    0: 'Hello',
    1: 'world!',
    length: 2
}
obj.join=Array.prototype.join
console.log(obj.join(', '));

function f() {
    alert("Hello!");
}
Function.prototype.defer=function(ms){
    setInterval(this, ms)
}
f.defer(3000)
*/



//   PROTOTYPES METHODS, OBJECTS WITHOUT __proto__
/*
let animal={
    eats: true
}
let rabbit=Object.create(animal)
console.log(rabbit.eats);
console.log(Object.getPrototypeOf(rabbit))
console.log(Object.getPrototypeOf(rabbit)===animal);
*/



//   CLASS: BASE SYNTAX
/*
class User{
    constructor(name){
        this.name=name
    }
    sayHi(){
        alert(`Hi my name is ${this.name}`)
    }
}

let user_1=new User('Mark')
user_1.sayHi()
console.log(user_1.name);

user_1.name='Stepan'
user_1.sayHi()
console.log(user_1.name);

class User{
    constructor(name){
        this.name=name
    }
    sayHi(){
        alert(`Hi my name is ${this.name}`)
    }
}

console.log(typeof User);
*/



//   CLASS INHERITANCE
/*
class Animals{
    constructor(name) {
        this.speed=0
        this.name=name
    }
    run(speed) {
        this.speed=speed
        console.log(`${this.name} has speed ${this.speed}`);
    }
    stop() {
        this.speed=0
        console.log(`${this.name} is stopped`);
    }
}
let animal=new Animals('Jack')
animal.run(3)
animal.stop()

class Rabbit extends Animals {
    hide() {
        console.log(`${this.name} is hiding!`);
    }
}
let rabbit=new Rabbit('John')

rabbit.run(5)
rabbit.hide()

class Rabbit_1 extends Animals {
    hide() {
        console.log(`${this.name} is hiding!`);
    }
    stop(){
        super.stop()
        this.hide()
    }
}
let rabbit_1=new Rabbit_1('Mark')

rabbit_1.run(18)
rabbit_1.stop()

class Animals{
    constructor(name) {
        this.speed=0
        this.name=name
    }
    run(speed) {
        this.speed=speed
        console.log(`${this.name} has speed ${this.speed}`);
    }
    stop() {
        this.speed=0
        console.log(`${this.name} is stopped`);
    }
}
let animal=new Animals('Jack')

class Rabbit extends Animals {
    constructor(name, earLength) {
        super(name)
        this.speed=0
        this.name=name
        this.earLength=earLength
    }
    hide() {
        console.log(`${this.name} is hiding!`);
    }
}
let rabbit=new Rabbit('Mr.White', 10)
console.log(rabbit.name);
console.log(rabbit.earLength);
*/



//   STATIC PROPERTIES AND METHODS
/*
class User{
    static staticMethod(){
        console.log(this===User);
    }
}
User.staticMethod()

class Article{
    constructor(title, date){
        this.title=title
        this.date=date
    }
    static compare(articleA, articleB) {
        return articleA.date-articleB.date
    }
}
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];
articles.sort(Article.compare)
console.log(articles[0].title);

class Article{
    constructor(title, date){
        this.title=title
        this.date=date
    }
    static createTodays(){
        return new this('Today', new Date())
    }
}
let article=Article.createTodays()
console.log(article);

class Article{
    static author='J.M.'
}
*/



//   Private and protected methods and properties
/*
class CoffeeMachine{
    waterAmount=0;

    constructor(power){
        this.power=power
        console.log(`Coffemachine created, power: ${power}`);
    }
}
let coffeeMachine=new CoffeeMachine(100)
coffeeMachine.waterAmount=300

class CoffeeMachine{
    _waterAmount=0;

    setWaterAmount(value){
        if(value<0){
            alert("ERROR. Water amount can't be -value")
            this._waterAmount=value
        }
    }

    getWaterAmount(){
        return this._waterAmount
    }

    constructor(power){
        this.power=power
    }

    
}
let coffeeMachine=new CoffeeMachine(100)
coffeeMachine.setWaterAmount(-120)

class CoffeeMachine{
    constructor(power){
        this._power=power
    }

    get power(){
        return this._power
    }
}
let coffeeMachine = new CoffeeMachine(300)
console.log(`Power: ${coffeeMachine.power}W`)
coffeeMachine.power=21
console.log(`Power: ${coffeeMachine.power}W`)

class CoffeeMachine{
    #waterLimit=1000

    #checkWater(value){
        if(value<0) console.log("ERROR. Water amount can't be -value!");
        if(value>this.#waterLimit) console.log("ERROR. Too much water!");
    }
}
let coffeeMachine=new CoffeeMachine()
coffeeMachine.#checkWater()
coffeeMachine.#waterLimit = 1000;
*/



//   Extension of built-in classes
/*
class Awkward extends Array{
    isEmpty(){
        return this.length===0
    }
}
let arr=new Awkward(1,2,5,10,50)
console.log(arr.isEmpty());

let filteredArr=arr.filter(item => item => 10)
console.log(filteredArr);
console.log(filteredArr.isEmpty());
*/



//   Class check: "instanceof"
/*
class Rabbit{}
let rabbit_w=new Rabbit()
console.log(rabbit_w instanceof Rabbit);

function Rabbit(){}
console.log(new Rabbit() instanceof Rabbit);

let arr=[12,2,344,3,545,4]
console.log(arr instanceof Array);
console.log(arr instanceof Object);
*/



//   Impurities
/*
let sayHiMixin={
    sayHi(){
        console.log(`Hi, ${this.name}`);
    },
    sayBye(){
        console.log(`Bye, ${this.name}`);
    }
}

class User{
    constructor(name){
        this.name=name
    }
}

Object.assign(User.prototype, sayHiMixin)

let user=new User('Courier Six')

user.sayHi()
user.sayBye()
*/



//   Error handling, "try..catch".
/*
try{
    console.log("Start try");
    aboba
    console.log("End try(never complete)");
} catch(error){
    console.log("ERROR");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

let incorrectJson="{ Blablabla }";
try{
    let data=JSON.parse(incorrectJson);
    console.log(data.name);
} catch(e) {
    console.log("ERROR. Sorry, data has errors, trying to solve...");
    console.log(e.name);
    console.log(e.message);
}
*/



//   User Errors, Error extension
/*
class ValidationError extends Error{
    constructor(message) {
        super(message)
        this.name="ValidationError"
    }
}

function test() {
 throw new ValidationError('o_O')       
}

try {
    test()
} catch (error) {
    console.log(error);
}

class ValidationError extends Error{
    constructor(message) {
        super(message)
        this.name="ValidationError"
    }
}

class PropertyRequired extends ValidationError{
    constructor(property){
        super("Property not found:" + property)
        this.name="PropertyRequired"
        this.property=property
    }
}

class ReadError extends Error{
    constructor(message, cause){
        this.cause=cause
        this.name="ReadError"
    }
}

class ValidationError extends Error{
    constructor(message) {
        super(message)
        this.name="ValidationError"
    }
}

class PropertyRequiredError extends ValidationError{
    constructor(property){
        super("Property not found:" + property)
        this.name="PropertyRequired"
        this.property=property
    }
}

function validateUser(user){
    if(!user.age){
        throw new PropertyRequiredError('age')
    }
    if(!user.name){
        throw new PropertyRequiredError('name')
    }
}

function readUser(json){
    let user
}

try{
    user=JSON.parse(json)
} catch(e){
    if(e instanceof SyntaxError){
        throw new ReadError('Syntax error', e)
    } else{
        throw e
    }
}

try {
    validateUser(user)
} catch (error) {
    if(error instanceof ValidationError){
        throw new ReadError('Validatiob error', error)
    } else{
        throw error
    }
}

try {
    readUser('{sgitty json}')
} catch (error) {
    if(error instanceof ReadError){
        console.log(e);
        console.log("Source error:" + error.cause);
    } else{
        throw error
    }
}

class FormatError extends SyntaxError{
    constructor(message){
        super(message)
        this.name="FormatError"
    }
}
let err=new FormatError('format error')
console.log(err.name);
console.log(err.message);

console.log(err instanceof FormatError);
console.log(err instanceof SyntaxError);
*/



//   Introduction: callbacks
/*
function loadOrders(src){
    let script=document.createElement("script")
    script.src=src
    document.head.append(script)
}
loadOrders("async.js")

newFunction()

function loadOrders(src, callback){
    let script=document.createElement("script")
    script.src=src
    script.onload=()=>callback(script)
    document.head.append(script)
}
loadOrders("async.js", function(){
    newFunction()
})

function loadOrders(src, callback){
    let script=document.createElement("script")
    script.src=src
    script.onload=()=>callback(null, script)
    script.onerror=()=>callback(new Error(`Orders isn't loaded: ${src}`))
    document.head.append(script)
}
loadOrders("async.js", function(error,script){
    if(error){
        handleError(error)
    } else {
        loadOrders("async.js", function(error,script){
            ...
        }
    }
})
*/



//   Promises
/*
let promise1=new Promise(function (resolve, reject) {
    setTimeout(()=>resolve(console.log('done')), 1000)
});

let promise2=new Promise(function (resolve, reject) {
    setTimeout(()=>reject(new Error(console.log('ERROR'))), 2000)
});

function loadScript(src){
    return new Promise(function(resolve, reject){
        let script=document.createElement('script')
        script.src=src

        script.onload=()=>resolve(script)
        script.onerror=()=>reject(new Error(`Script loading error ${src}`))

        document.head.append(script)
    })
}

let promise=loadScript("async.js")
promise.then(
    script=>console.log(`${script.src} succesfully loaded`),
    error=>console.log(`Error: ${error.message}`)
)

const delay=(time=2000)=>{
    let promise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log('done'))
        }, time)
    })
    return promise
}
delay(3000).then(function(){
    console.log('This is worku=ing!');
})
*/



//   Promises Chain
/*
new Promise(function(resolve, reject) {
    setTimeout(()=>resolve(1), 1000)
}).then(function(result) {
    console.log(result);
    return result*2
}).then(function(result) {
    console.log(result);
    return result*2
}).then(function(result) {
    console.log(result);
    return result*2
})

new Promise(function(resolve, reject) {
    setTimeout(()=>resolve(1), 1000)
}).then(function(result) {
    console.log(result);
    return new Promise(function(resolve, reject){
        setTimeout(()=>resolve(result*2),1000)
    })
}).then(function(result) {
    console.log(result);
    return new Promise(function(resolve, reject){
        setTimeout(()=>resolve(result*2),1000)
    })
}).then(function(result) {
    console.log(result);
    return new Promise(function(resolve, reject){
        setTimeout(()=>resolve(result*2),1000)
    })
})

function loadScript(src){
    return new Promise(function(resolve, reject){
        let script=document.createElement('script')
        script.src=src

        script.onload=()=>resolve(script)
        script.onerror=()=>reject(new Error(`Script loading error ${src}`))

        document.head.append(script)
    })
}
loadScript('first.js')
.then(script=>loadScript('second.js'))
.then(script=>loadScript('endless.js'))

fetch('/bla/bla-bla/user.json')
.then(response=>response.text())
//.then(response=>response.json())
.then(text=>console.log(text))


fetch('/bla/bla-bla/user.json')
.then(response=>response.json())
.then(userEl=>fetch(`https://api.github.com/users/${user.name}`))
.then(response=>response.json())
.then(gitHubUserAvatar=>new Promise((resolve,reject)=>{
    let img=document.createElement('img')
    img.src=gitHubUserAvatar.avatar_url
    img.className="avatar-example"
    document.body.append(img)
    setTimeout(()=>{img.remove();resolve(gitHubUserAvatar), 3000})
}))

function loadJSON(url){
    return fetch(url)
    .then(response=>response.json())
}

function loadUserInfo(name){
    return fetch(`https://api.github.com/users/${name}`)
    .then(response=>response.json())
}


function showUserAvatar(userAvatar){
    return new Promise((resolve,reject)=>{
        let img=document.createElement('img')
        img.src=userAvatar.avatar_url
        document.body.append(img)
        setTimeout(()=>{img.remove();resolve(userAvatar), 3000})
    })
}

loadJSON('/article/promise-chaining/user.json')
.then(user=>loadUserInfo(user.name))
.then(showUserAvatar)
*/



//   Promises: errors handling
/*
fetch('https://bla/bla-bla.com')
.then(response=>response.json())
.catch(error=>console.log(error))

new Promise((resolve,reject)=>{
    throw new Error('Test error')
})
.catch(error=>console.log('Error is disabled'))
.then(console.log('Going next...'))

new Promise((resolve, reject)=>{
    throw new Error(ReferenceError)
})
.catch(err=>{
    if(err instanceof ReferenceError) {
        console.log('Error dealed');
    } else{
        console.log('Can not deal with it');
        throw err
    }
})
.then(function(){
    console.log('sex');
})
.catch(err=>{
    console.log(`Unknown ERROR: ${err}`);
})

window.addEventListener('unhandledrejection', event=>{
    console.log(event.promise);
    console.log(event.reason);
})

new Promise((resolve, reject)=>{
    throw new Error(ReferenceError)
})
*/



// Promise API
/**/


































