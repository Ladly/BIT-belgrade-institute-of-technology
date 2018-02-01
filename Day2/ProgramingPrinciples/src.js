// prereq: node.js and coderunner

var currentMood = "semi-dead lol"

console.log(currentMood);

console.log(1.2 * 1000); //1.2kg
console.log(5 * 60); // 5 min
console.log(30 * 60) // 30min
console.log(1024 * 4 - 4000) // more memory
console.log((96 * 1000) / 98) // extra images

var yearOfBirth = 1982

console.log(yearOfBirth + 1) // yearOfBirth + 1
console.log(yearOfBirth++) // same
console.log(yearOfBirth--) // work with -

var a = b = 2
var c = d = 9


console.log(a *= 2)
console.log(b += 3)
console.log(c /= 3)
console.log(d -= 7)

var myName = "Vuk"
var myAge = 2018 - yearOfBirth;
var cat = !cat 
console.log(typeof myName)
console.log(typeof myAge)
// console.log(typeof cat)

let userAge = -1

if(userAge <= 0 || userAge > 120) {
    console.log('wrong age input')
}

console.log(userAge)

let currentSpeed = 70

var checkSpeed = ((currentSpeed >= 60) && (currentSpeed <= 120))
if(checkSpeed) {
    console.log('you drive safe')
} else {
    console.log('now you don\'t drive safe')
}
