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
    sayHi(){  // === "sayHi : function sayHi() {...}"
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
        this.b=+prompt('b',0)
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
*/










































































































































































