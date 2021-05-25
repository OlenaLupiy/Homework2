// Task1
let x= 1;
let y = 2;
let res1 = x + '' + y;
console.log(res1);
console.log(typeof res1);

let res2 = 'true' + y;
console.log(res2);
console.log(typeof res2);

let res3 = y > x;
console.log(res3);
console.log(typeof res3);
// Або інший спосіб
res3 = !!x;
console.log(res3);
console.log(typeof res3);

let res4 = 'true' / y;
console.log(res4);
console.log(typeof res4);

//Task2
let z = prompt('Enter yout number', '');
let res5 = z > 0 && z%2===0;
console.log(res5);

let c = prompt('Enter your number', '');
let res6 = c%7===0;
console.log(res6);

// Task3
let test = [];
test[0] = 28;
test[1] = 'Olena';
test[2] = true;
test[3] = null;
console.log(test.length);
let rezult = prompt('Enter any sign', '');
console.log (test [4] = rezult);
console.log(test);
test.shift();
console.log(test);

// Task4
let cities = ['Rome', 'Lviv', 'Warsaw'];
alert(cities.join('*'));

// Task5
let isAdult = prompt('Enter your age', '');
if (isAdult >= 18){
    alert('You are adult')
}
else if (isAdult > 0 && isAdult <= 10){
    alert('You are too small')
}
else{
    alert('You are teenager')
};

//Task 6
 let a = +prompt('Enter the size of the first side', '');
 let b = +prompt('Enter the size of the second side', '');
 let d = +prompt('Enter the size of the third side', '');
   if (a>0 && b>0 && d>0){
 let p = (a+b+d)/2;
 let square = (p*((p-a)*(p-b)*(p-d)))**(1/2);
 alert('Square = ' + square.toFixed(3))}
 else {
     alert ('Incorrect data')
 };
if ((a**2) === (b**2)+(d**2) || (b**2) === (a**2)+(d**2) || (d**2) === (b**2) +(a**2)){
    alert ('This is a right triangle')}
    else{
        alert('This is a normal triangle')
    };

    // Task7

    let time = +prompt('Enter time', '');
   switch (time) {
       case 23:
       case 24:
       case 1:  
       case 2:
       case 3:
       case 4:
       case 5:
           alert('Доброї ночі')  
           break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert('Доброго ранку')
            break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:                    
            alert('Доброго дня')
            break;
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            alert('Доброго вечора')        
            break;
       default:
           alert('It is not valid time')
           break;
   }

   if (time>=5 && time <=11){
       alert('Доброго ранку')
   }
   else if (time>=11 && time <=17){
       alert('Доброго дня')
   }
   else if (time>=17 && time<=23){
       alert('Доброго вечора')
   }
   else if ((time >=23 && time<=24) || (time>=0 && time <=5)){
       alert('Доброї ночі')
   }
   else{
       alert('It is not valid time')
   };





























