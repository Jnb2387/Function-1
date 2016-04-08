//Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
function tripleFive(){
    for(var i = 0; i < 2; i++){
        console.log('Five!');
    }
}

tripleFive();


// Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
function lastLetter(i){
    var last = i.charAt(i.length -1);
    return last;
    
}
console.log(lastLetter("hello"));
// made variable with one argument "string", made new variable to find "string" last charAt
//which is used in conjunction with .length to get to the end and then -1 for last character.
//return the variable which was changed. and input the new word into the function being called.
var lastLetter = function(string){
    var last = string.charAt(string.length-1);
  return last;
};
console.log(lastLetter("island"));



// Write a function called 'square' which takes a single argument which is a number, and returns number * number.
function square(i){
        console.log(i * i);
}

square(3);

// which way is easier?
var square = function(num){
    return num * num;
};
console.log(square(5));


// Write a function called 'negate' which takes a single number argument and returns the negative of that number.
var negate = function(x){
    return x * -1;
};
console.log(negate(5));

var negate = function(x){
    return x * -1;
};
console.log(negate(-8));


// Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
var toArray = function(x,y,z){
  var array =[x,y,z];
  return array;
};
console.log(toArray(1, 2, 3));

var toArray = function(x, y, z){
    var array= [x,y,z];
    return array;
};
console.log(toArray(8, 9, 10));


// Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
var startsWithA = function(string){
    if(string.charAt(0) =="a"){
        return true;
    }else{
        return false;
    }
};
console.log(startsWithA("aardvark"));
console.log(startsWithA("bear"));
console.log(startsWithA("aries"));


// Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
var excite = function(string){
    return string + "!!";
};
console.log(excite("Yes"));
console.log(excite("Go"));


// Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
//.includes searchs
var sun = function(string){
    if (string.includes("sun") ){
        return true;
    }else{
        return false;
    }
};
console.log(sun("sundries"));
console.log(sun("asunder"));
console.log(sun("catapult"));
console.log(sun("tosundome"));


// Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
var tiny = function(x){
    if(x >= 0 && x <= 1){
        return true;
    }else{
        return false;
    }
};
console.log(tiny(.3));
console.log(tiny (14));
console.log(tiny(-5));


// Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.
// Can't get function to work with a colon:
var getSeconds = function(mm,ss){
    var seconds = (mm* 60) + ss;
    return seconds;
};
console.log(getSeconds(1,30));
console.log(getSeconds(10,25));
console.log(getSeconds(6,47));