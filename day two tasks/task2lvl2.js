//Using console.log() print out the following statement:
let quote= "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console. log(quote);

//Using console.log() print out the following quote by Mother Teresa:
let motherT= "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console. log(motherT);

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten='10'
console.log(typeof parseInt('10'));
let second=10
console.log(typeof 10);
console.log(typeof parseInt('10')=== typeof 10);

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console. log(parseFloat('9.8'));
let correct= Math.round(parseFloat('9.8'));
console. log(correct);

//Check if 'on' is found in both python and jargon
let One= "Phyton"
let two= "jargon"
console. log(One.includes("on"));
console. log(two.includes('on'));

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let course= "I hope this course is not full of jargon. Check if jargon is in the sentence"
console. log(course.includes('jargon'));

//Generate a random number between 0 and 100 inclusively.
let random= Math.floor(Math.random () * 101);
console. log(random);
//Generate a random number between 50 and 100 inclusively.
let random2= Math.floor(Math.random () * 51 + 50)
console. log(random2);
//Generate a random number between 0 and 255 inclusively.
let weird= Math. floor(Math.random () * 256)
console. log(weird);

//Access the 'JavaScript' string characters using a random number.
let string2='JavaScipt'
let stringRand=(string2.length)
console.log(stringRand);
let finalAns=Math.floor(Math.random() * stringRand)
console.log(finalAns);

//Use console.log() and escape characters to print the following pattern.

console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');



//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let newSentence = (sentence.substr(31,23))
console.log(newSentence);
