//Write a function that accepts 2 numbers and returns -1 
//if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.

function compareNums(a,b){

    if(a < b){
        return -1;
    }else if(  a > b){
        return 1;
    }else if(a === b){
        return 0;
    }
}
console.log(compareNums(4,5));

function comparesOnClick(){
    document.getElementById('compares').innerHTML = "The result is:"  + compareNums(4,5);
}


//Write a function that counts the factorial of a given number. 

function factorial(num){

    if (num < 0) {
      return   console.log('Error! Factorial for negative number does not exist.');
    }

    else if(num == 0){
        return 1;
    }else {
        let fact = 1;
        for (i = 1; i <= num; i++) {
            fact *= i;

        }
        return fact;
    }
    
}

console.log(factorial(5));

//Write a function that accepts three separate digits and makes them a number. 
//For example, 1, 4, and 9 will become 149.

function concatNums(a,b,c){
    return   "" + a + b + c;
}

console.log(concatNums(1,4,9));

//Write a function that accepts the width and length of a rectangle and calculates its area. 
//If there is only one parameter given, it counts as a square. 
// A = W * l;

function rectangle(w,l){
    let a = w*l;
    return a;
}
console.log(rectangle(5,20));

//Write a function that checks if the given number is perfect. 
//A perfect number is a number equal to the sum of all its divisors. 
//For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.


const num = 6;
const checkPerfectNumber = (num = 1) => {
   if(num === 1) {
      return false;
   };
   let sum = 1;
   for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) {
         sum = sum + i + num / i; if(sum > num) {
            return false;
         }
      };
   };
   return sum === num;
};
console.log(checkPerfectNumber(num));

//Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. 
//Use the previous function to check, if numbers are perfect. 
function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
     if(temp === number && temp !== 0)
        {
          console.log(temp + " is a perfect number");
        }
     else
        {
       console.log("It is not a perfect number.");
        }
 }

function minMax(min, max){

    for(let i = min; i <= max; i++){
        if(is_perfect(i)){
        
            return i;
        }
    }
}

// console.log(minMax(16,28));




//Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. 
//If the seconds are not given, they should be displayed as 00.




function convertDurationtoSeconds(duration){
    const [hours, minutes, seconds] = duration.split(':');
    return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
};

const input = '01:30:45';
const output = convertDurationtoSeconds(input);
console.log(`${input} is ${output} in seconds`);



function toHMS(seconds){
    
    let toSeconds = "00";
    let toHours = seconds / 3600;
    // console.log("to hours " + toHours);
    let toMins = toHours * 60;
    // console.log("to mins " +toMins);
    toSeconds = toMins * 60;
    // console.log("to sec " + toSeconds);

    
    return toHours + ":" + toMins + ":" + toSeconds;
    

}

console.log("Seconds to hh:m:s " +toHMS(6000));