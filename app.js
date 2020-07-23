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
apartOne = {
 location: "brooklyn",   
 rooms: 4
}

apartTwo.__proto__=apartOne;
