condocument.getElementById('name'). innerText = name;
}
// variables   
const pi = 3.142;
let username = 'omnilorie';
let age = 101;
let present = false;

// objects
const person = {
    username: 'omnilorie',
    age: 101,
    present: false,
    child: {
        name: 'Mickey mouse',
        friend: {
            name: 'Biggie',
        }
    }
}
console.log(person.username);
person.age = 105;
console.log(person);

//Arrays
const bottle1 = {
    size: 'large',
    color:'yellow'
  }
  const bottle2 = {
    size: 'small',
    color: 'blue'
  }
  
  const bottles = [bottle1, bottle2];
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[1].size;
  
  const date = new Date();
  date.getDay();
  
  //if/else
  const age = 18;
  if (age >= 18) {
    'You are true';
  } else {
    'You are false';
  }
  // for loop
  for (let i = 0; i <= 5; i++) {
    console.log('We did it!', )
  }


  //functions
//Defining a function
function login(username, password) {
  //validate  username and password
if(!username || !password) {
  return 'username or password not provided';
}
  //verify username and password
 if (username == 'mickeymond' && password =='1234'){
   return 'user is logged in';
 } else {
   return 'Invalid username or password';
 }
}
// invoking a function
login('mickeymond', '1234');







//Basic Arithmetic Operations
11 + 12;
1 + 0.5;
45 / 5;
20 - 2;
5 * 5;
14 % 3;


//Strings in Javascript
//Concactenation
const firstname = 'Lorie';
const lastname = 'Osibe';
const middlename = '';
firstname + ' ' + lastname;
// Template literal
`${firstname} ${middlename} ${lastname}`;

let fullname = "Lorie Osibe"
fullname.length
fullname.toUpperCase()
fullname.charAt(2)
fullname.slice(7,16)
fullname.split("")
fullname.replace("lillian", "Bernice")
fullname.indexOf("ie")

//string conversion
Number("3.243")
parseInt("3.243")
parseFloat("3.243")
let amount = 100000
console.log(`GHS$(amount)` )
amount.toString()st btn = document.getElementById('btn');
btn.onclick = function () {
   const name = prompt('Enter your full name');
   


//write a function that will take a user with firstname, lastname and return a full name;

function fullName(user) {
  return {
    ...user,
    fullName: '${user.firstname} ${user,lastname}'
   };
  }
  
  const user = {
  firstname: 'lorie',
  lastname: 'Osibe'
  }
  fullName(user);
  
  //Array map 
  const users = [
  {firstname: 'Michael', lastname: 'Hammond'},
  {firstname: 'Elon', lastname: 'Musk'},
  {firstname: 'Berry', lastname: 'Allen'},
  {firstname: 'Oliver', lastname: 'Queen'},
  {firstname: 'Will', lastname: 'Smith'},
  ]
  // users.map(fullName);
  
  //Square of numbers
  function square(number) {
    return number **2;
  }
  square(10);
  const numbers = [9, 8, 7, 6];
  numbers.map(square);
  
  //Array filter
  function isEven(number) {
    return number % 2 === 0;
  }
  isEven(6);
  numbers.filter(isEven);



  //Classes in Javascript
class Laptop {
  constructor(brand, color){
    this.brand = brand;
    this.color = color;
  }
}
const laptop1 = newnlaptop('Dell','black');
const laptop2 = new Laptop('Hp' 'silver');
laptop1.brand;
laptop2.brand;