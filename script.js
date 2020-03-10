const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

let inventorsNameStartWithA = [];
let inventorsContainN = [];
let inventorsTwiceSame = [];
let numberOdd = [];
let number2Digits = [];
let inventorsFirstName = [];
let toUpperCaseName = [];
let initialsName = [];
let multiplied100 = [];
let pow3 = [];


//inventors name start with "a"
inventorsNameStartWithA = inventors.filter((name) => {
    if (name.charAt(0) === "A") {
        return inventors;
    };
});

console.log('The inventors have first letter of name is "a" are ', inventorsNameStartWithA)



//inventors name contain "n"
inventorsContainN = inventors.filter((name) => {
    if (name.includes("n"))
        return inventors;
})

console.log('The inventors have a name which cotain "n" are ', inventorsContainN)

//twice
inventorsTwiceSame = inventors.filter((name) => {
    let splitName = name.split(' ');
    let isDuplicate = false;
    console.log(splitName);
    splitName.map((_, i) => {
        if (splitName[i] === splitName[i + 1]) {
            isDuplicate = true;
        }
        return isDuplicate
    })
    return isDuplicate
})

console.log('The inventors have a name which cotain "n" are ', inventerNameTwice)

//Print out an array of the numbers which are odd.
numberOdd = numbers.filter((num) => {
    return num % 2 === 1;
});

//two digits
number2Digits = numbers.filter((number) => {
    if (number > 9 && number < 100) {
        return numbers
    }
})

console.log('The number with two digits ', number2Digits);

//print out prime
isPrime = numbers.filter((n) => { const regex = /^(11+?)\1+?$/; return !('1'.repeat(n).match(regex)) })

//print out the first name of each inventor
inventorsFirstName = inventors.map((name) => {
    let nameSplit = name.split(' ', 1);
    return nameSplit;
})

console.log('The first name ', inventorsFirstName);

//print out the len
let lengthInventors = [];

lengthInventors = inventors.map((name) => {
    return name.length - 1; // - 1 spacebar
})
console.log("Print out the length of every inventor's full name.", lengthInventors);


//Print out all the inventors' names in uppercase.
toUpperCaseName = inventors.map((name)=> {
    for (i=0 ; i < name.length; i++) {
      return name.toUpperCase();
    };
  });
  console.log("Print out all the inventors' names in uppercase:",toUpperCaseName);

//prin out initials 
inventors.map ((name) => {
    let nameSplit = name.split(' ');
    
  
    return nameSplit.reduce((total, eachname) =>{
      total += eachname.charAt(0)
      return total
    }, '')

  })



