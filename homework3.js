//A function that takes at least three arguments and returns the result of some set of operations using those arguments - 5 points
 
 const number=function(number1,number2,number3){
	return number1+number2*number3
}
console.log(number(2,3,4))


//A function that takes no arguments and returns something - 5 points

const a=function() {
	return 22
}
console.log(a())

//A function that takes arguments, does something but does not return anything - 6 points

const set=function(number1,number2,number3){
  console.log(number1+number3-number2);
	};
 
 set(3,4,6)
 

//A function that takes three strings and returns the string that is the longest.  - 6 points

 const string=function(string1,string2,string3){
	if (string1.length>string2.length && string1.length>string3.length){
		return string1;
	}
	else if (string2.length>string1.length && string2.length>string3.length) {
		return string2;

	}
	else if (string3.length>string1.length && string3.length>stirng2.length) {
		return string3;
	}
};

  console.log(string('Haykuhi','Safaryan','Tigrani'))


//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger - 6 points
 const numberA=function(number1,number2){

	if (number1===number2) {
		return 0;
	}
	else if(number1>number2){
		return 1;
	}
	else{
		return -1;
	}
};

console.log(numberA(4,5));

//Create a multiply function (that multiplies the two given arguments together and returns the result) - 2 points

const multiplication=function(a1,a2){
	return a1*a2
}
console.log(multiplication(2,3))



//Create a divide function (that divides the first argument by the second and returns the result) - 2 points
const division=function(b1,b2){
	return b1/b2
}
console.log(division(144,2))



//Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / (HINT: Use the multiply and divide functions you already wrote) - 6 points
{
  // your code goes here
};
const triangleArea = function(base, height) {
const tArea1 = multiplication(base, height)
const tArea2 = division(tArea1, 2)
return tArea2
};
  
  console.log(triangleArea(4,6))
    


//Create a function called numLength that takes a number and returns the number of characters in the number (example: numLength(8940); should return 4).  Hint: strings have .length, numbers don't - so make a string and then get the length - 6 points

  const numLenght=function(a){
    
   return (a+'').length;
		
	};
  console.log(numLenght('576'))



//Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1.  - 6 points
 const b=function(string1,string2,numberx){

		if (string1.lenght + string2.lenght > numberx) {
          return 1;
        } else{ 
			return -1;
		}
	};
console.log(b('tt','dd',8))
  


//Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1.   - 10 points
const runStuff=function(number1,number2,string){
    if(string==='rectangle'){ return number1*number2
    } else if(string==='triangle'){
      return number1*number2/2}
    else{
    return -1}
  }
  console.log(runStuff(4,6,'rectangle'))