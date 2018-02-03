// 1.
var someNumber = 7;

if(typeof someNumber === "number") {
    console.log('It is a number')
    if(someNumber % 2 === 0) {
        console.log(someNumber)
    } else {
        console.log('X')
    }
} else {
    console.log('It is not')
}

// 2.
// note: fails on 0

var someOtherNumber = 15

if(someOtherNumber % 3 === 0  && someOtherNumber % 5 === 0) {
    if(someOtherNumber === 0) {
      console.log(someOtherNumber + " is someOtherNumber")
    }   else {
			console.log(someOtherNumber)
		}
} else {
    console.log('X')
}

// 3. 

var evenOrOdd = -3

if(evenOrOdd % 2 === 0) {
    console.log('it is even')
} else if(evenOrOdd % 2 !== 0) {
    console.log('it is odd')
}

// 4.
// will use some prev variables
if(someOtherNumber > someNumber) {
	console.log(someOtherNumber);
} else {
	console.log(someNumber)
}

// 5.
// will also use prev vars

var result = 0;

result = someNumber * someOtherNumber * evenOrOdd

if(result >= 0) {
	console.log("The sign is +")
} else {
	console.log("The sign is -")
}

// 6.

var sempNum1 = 98
var sempNum2 = 63
var sempNum3 = 23

if(sempNum1 > sempNum2 && sempNum1 > sempNum3 && sempNum2 > sempNum3) {
	console.log(sempNum1 + ", " + sempNum2 + ", " + sempNum3)
} else if (sempNum1 > sempNum2 && sempNum1 > sempNum3 && sempNum2 < sempNum3) {
	console.log(sempNum1 + ", " + sempNum3 + ", " + sempNum2)
} else if (sempNum2 > sempNum1 && sempNum2 > sempNum3 && sempNum1 > sempNum3) {
	console.log(sempNum2 + ", " + sempNum1 + ", " + sempNum3)
} else if (sempNum2 > sempNum1 && sempNum2 > sempNum3 && sempNum1 < sempNum3) {
	console.log(sempNum2 + ", " + sempNum3 + ", " + sempNum1)
} else if (sempNum3 > sempNum1 && sempNum3 > sempNum2 && sempNum1 < sempNum2) {
	console.log(sempNum3 + ", " + sempNum2 + ", " + sempNum1)
} else if (sempNum3 > sempNum1 && sempNum3 > sempNum2 && sempNum1 > sempNum2) {
	console.log(sempNum3 + ", " + sempNum1 + ", " + sempNum2)
}

// 7.
// will use sempnum from prev task
var sempNum4 = 41
var sempNum5 = 103

if((sempNum1>sempNum2) && (sempNum1 > sempNum3) && (sempNum1 > sempNum4) && (sempNum1 > sempNum5)) {
	console.log(sempNum1 + " is highest")
} else if((sempNum2>sempNum1) && (sempNum2 > sempNum3) && (sempNum2 > sempNum4) && (sempNum2 > sempNum5)) {
	console.log(sempNum2 + " is highest")
} else if((sempNum3 > sempNum1) && (sempNum2 < sempNum3) && (sempNum3 > sempNum4) && (sempNum3 > sempNum5)) {
	console.log(sempNum3 + " is highest")
} else if((sempNum4 > sempNum1) && (sempNum2 < sempNum4) && (sempNum3 < sempNum4) && (sempNum4 > sempNum5)) {
	console.log(sempNum4 + " is highest")
} else if((sempNum5 > sempNum1) && (sempNum2 < sempNum5) && (sempNum3 < sempNum5) && (sempNum4 < sempNum5)) {
	console.log(sempNum5 + " is highest")
} 





