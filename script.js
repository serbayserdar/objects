// const userName = "Allan";
// const userAge = 27;

// const user =["Allan", 27 , true, false];

// console.log("The car status:", user[3]);


// const bookList = ["The Alchemist", "Atomic Habbits"];
// const name = "Bob";
// const user1 = {
//     name: "Allan",
//     age: 27,
//     isSmaart :true,
//     hasCar: false,
//     hobbies: ["coding", "running", "reading"],
//     favoriteFoods: {
//         breakfast: "Pancakes",
//         desert: "Donuts",
//         dinner: "Pizza"
//     },
//     sayHi: function(){
//         console.log("Hello there!");
//     },
//     introduce: function(){
//         // console.log("This keyword is an object", this);
//         console.log("Hello! My name is " + this.name + " and I am " + this.age);
//     }
// }

// console.log("The car status:", user1.hasCar);
// console.log("User 1 age is", user1.age);

// console.log(user1.hobbies[2]);

// console.log(user1.favoriteFoods.desert);

// user1.introduce();

// console.log("This keyword in the global scope", this);






// const cityOne = {
//     name: "London",
//     population: "9M",
//     continent: "Europe"
// }

// const cityTwo = {
//     name: "Bangkok",
//     population: "8M",
//     continent: "Asia"
// }


// function displayCityInfo(cityObj){
//     if(cityObj.continent == "Asia"){
//         return "Its too far";
//     }else if(cityObj.continent == "Europe"){
//         return "It's near";
//     }else if(cityObj.continent == "Astralia"){
//         return "It's down under";
//     }
// }

// console.log(displayCityInfo(cityOne));
// console.log(displayCityInfo(cityTwo));



// const boxOne = {
//     width: 2,
//     height: 8,
//     length: 10
// }

// const boxTwo = {
//     width: 5,
//     height: 10,
//     length: 7
// }

// // function getBoxVolume(boxObj) {
// //     const volume = boxObj.width * boxObj.height * boxObj.length;
// //     return volume;
// // }


// // console.log(getBoxVolume(boxTwo));


// function calculateVolume(boxObject) {
//     return boxObject.width * boxObject.height * boxObject.length;
// }



// console.log(calculateVolume(boxOne));
// console.log(calculateVolume(boxTwo));





// const cityOne = {
//     name: "London",
//     population: "9M",
//     continent: "Europe"
// }

// const values = Object.values(cityOne);

// console.log(values);

// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }



// const keys = Object.keys(cityOne);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
// }





const cityOne = {
    name: "London",
    population: "9M",
    continent: "Europe"
}

// delete cityOne.name;

cityOne.name = "";

console.log(cityOne);