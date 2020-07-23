//Object Oriented Programing
const dog = {
    name: "Michael",
    goodBoy: true,
    gender: "girl"
}

const dogTwo = {
    name: "Rocco",
    color: 'brown'

};

dogTwo. __proto__ = dog


console.log(dog);
console.log(dogTwo);
console.log(dogTwo.goodBoy);
console.log(dogTwo.name);


const mountainOne = {
    height: "tall",
    beautiful: true,
    trees: true,
};
const mountainTwo = {
    height: "short",
    beautiful: false,
    trees: true,
};
mountainTwo.__proto__=mountainOne;
console.log(mountainOne)
console.log(mountainTwo)

apartOne = {
 location: "long Island",   
 rooms: 3
}
apartTwo = {
 location: "brooklyn",   
 color: "white"

}

apartTwo.__proto__ = apartOne;

apartTwo.rooms = 4;
console.log(apartTwo.rooms)
console.log(apartOne.rooms)

function User (name) {//constructor Functions
    // this
    this.name = name;
    // retun this
}
let adam = new User('Adam');
let pete = new User('Pete');

console.log(pete.name);

console.log(adam.name);
function NBAPlaeyer(name, team, threePtShooter) {
    this.name = name;
    this.team = team;
    this.threePtShooter = threePtShooter;
    this.intro = function() {
        console.log ("hi may name is" +  this.name)
    }
}
let steph = new NBAPlaeyer( "Steph Curry", "Warriors", true)
console.log(steph);
steph.intro()//call the this.intro functin above
 

function User (pianist, musician){
    this.pianist = pianist;
    this.musician = musician;
    this.myNameIs = function() {
        console.log("hi, my name is Nick")
    }
}
let nick = new User('Nick Phillips', "pianist", true);
let john = new User( "John Lennon", "musician", true)
console.log(nick)
console.log(nick.name)
nick.myNameIs()

// make a class Function

class Car  {
    constructor( year, make, model, color) {
        this.name = year;
        this.make = make;
        this.color = color;
        this.model = model;
    }
    drive(){
        console.log("Vroom");
    }
    intro(){
        console.log('This is a ' + this.make + ' ' + this.model + " " + 'and goes');
    }
}

let tesla = new Car('2020', 'Tesla','Model S', 'White');
console.log(tesla);
tesla.drive();
tesla.intro();



class GitProfile{
    constructor( username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;
    }
    intro(){
        console.log(`My name is ${this.name} and my username is @${this.username}`)
    }
}
fetch('https://api.github.com/users/maestronick1')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    let gitUrl = data.url;
    console.log(gitUrl);
  let gitUserName = data.login;
  console.log(gitUserName);
  let gitName = data.name;

  let nick = new GitProfile(gitUserName, gitName, gitUrl);
  console.log(nick)

})

// Promises
// ES5: Part 1

let isMomHappy = false;

// Promise
let willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            let phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);
let willIGetNewPhone = new Promise((resolve, reject) =>{
    if (isMomhappy) {
        const phone = {
            brand: "iphone",
            color: "red"
        }
        resolve(phone);
    }
    else {
        reject('No Phone');
    }
});

willIGetNewPhone.then(result => {
    console.log(result)
});