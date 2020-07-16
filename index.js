// //Objects 
// // another fundamental building block of JS 
// // they allow us to group together properties and values
// // order of the properties does not matter
// // Everything in JavaScript is an object! Objects are used for collections of data

// // anatomy of an object 

// // const dog = {
// //   // key / value pairs 
// //   name: 'Ada',
// //   breed: 'Bali dog',
// //   age: 3,
// //   colour: 'brindle',
// //   'fav Food': 'salmon',
// //   // method - are functions that belong to the object
// //   eat: function(){
// //     return `${this.name} likes to eat ${this.favFood}`
// //   }
  
// // }
// // console.log(dog.age);

// // console.log(dog.eat()); // invoking the function 

// // // implicit binding - this is 80% of use cases for the "this" 
// // // when the function is invoked - look to the left of the dot - that's what "this" refers to

// // console.log(dog.eat); // referencing the function 

// // // return the dogs name in the console
// // // dot notation
// // console.log(dog.name);


// // bracket notation - this is useful for keys with spaces in them
// // console.log(dog['fav Food']);


// // const dog = {
// //   // key / value pairs 
// //   name: 'Ada',
// //   breed: 'Bali dog',
// //   age: 3,
// //   colour: 'brindle',
// //   favFood: 'salmon',
// //   sister:{
// //     name: 'Noa',
// //     breed: 'Bali dog',
// //     age: 1,
// //     play: function(){
// //       return `${this.name} loves to play with her toys`;
// //     }
// //   },
// //   // method - are functions that belong to the object
// //   eat: function(){
// //     return `${this.name} likes to eat ${this.favFood}`
// //   },
  
// // }

// // console.log(dog.sister.play()); // still implicit binding
// // console.log(dog.sister.name);


// // we can put objects inside of array!
// // const places = [
// //   {city: 'Tel Aviv', country: 'Israel', region: 'Middle East'},
// //   {city: 'Toronto', country: 'Canada', region: 'North America'},
// //   {city: 'Dar Es Salaam', country: 'Tanzania', region: 'East Africa'},
// //   {city: 'Sonoma', country: 'USA', region: 'North America'},
// //   {city: 'Santiago', country: 'Chile', region: 'South America'},
// //   {city: 'Tokyo', country: 'Japan', region: 'Asia'},
// //   {city: 'Budapest', country: 'Hungary', region: 'Europe'},
// // ]

// // console.log(places);

// //Breakout
// // create an array called northAmerica
// // loop through places and push all of the city names that are in North America to the new array 

// // create my new array
// // const northAmerica = [];

// // // loop through the places array
// // for(let i = 0; i < places.length; i++){
// //   // write a conditional that will check if the region is north america, if it is, push the city to the new array
// //   if(places[i].region === 'North America'){
// //     northAmerica.push(places[i].city);
// //   }
// // }

// // console.log(northAmerica);

// // create a function that adds a new object to the end of an array 
// // the function should take 4 params - array name, city, country, region
// // it should return the array with the new object 

// // add new object to array 

// // create a function with 4 paramerters 

// // function addPlace(array, city, country, region){
// //   // add something to the end of an array 
// //   array.push({city, country, region});
// //   return array;
// // }

// // console.log(addPlace(places, 'Florence', 'Italy', 'Europe'));

// const places = [
//   {city: 'Tel Aviv', country: 'Israel', region: 'Middle East'},
//   {city: 'Toronto', country: 'Canada', region: 'North America'},
//   {city: 'Dar Es Salaam', country: 'Tanzania', region: 'East Africa'},
//   {city: 'Sonoma', country: 'USA', region: 'North Africa'},
//   {city: 'Santiago', country: 'Chile', region: 'South America'},
//   {city: 'Tokyo', country: 'Japan', region: 'Asia'},
//   {city: 'Budapest', country: 'Hungary', region: 'Europe'},
// ];

// // write a function that changes the region at a specific index

// function changeRegion(array, index, region){
//   // array[index].region = region;
//   return array;
// }

// console.log(changeRegion(places, 3, 'North America'));

// // when the function is invoke with arg the code looks like this 
// // places[3].region = 'North America'
// // return places;

// // more useful function 

// // function changes(array, index, key, updatedValue){
// //   array[index][key] = updatedValue;
// //   return array;
// // }

// // const changes = (array, index, key, updatedValue) => {
// //   array[index][key] = updatedValue;
// //   return array;
// // }

// // console.log(changes(places, 3, 'region', 'North America'))

// // we can write a function that would return a new object 

// function createPet(obj, name, species, well_behaved){
//   obj = {name, species, well_behaved};
//   return obj;
// }

// console.log(createPet('myPet', 'Zev', 'cat', false));
// console.log(myPet); // although myPet is the name of the object inside of the function - because of scope - this object does not exist outside of the function 


//////////////Menu Items (MVP)///////////////////

// const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
// const burger = {name: "Burger", price: 18, category: "Lunch"};
// const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

// /* Task 1a: write a function to return more menu items with the same format as the items above. */

// function createMenuItem(name, price, category){
//   return {name, price, category};
// }

// /* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

// console.log(createMenuItem('hot dog', 3, 'Lunch'))
// console.log(createMenuItem('hotCoffee', 2, 'Breakfest'))
// console.log(createMenuItem('hotTea', 1, 'Breakfest'))




/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. 

Your method should accept: 

(1) A string (teacher, student, or public)

and should return a number. 

For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/



///////////////Reviews (MVP)///////////////////

const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
                  {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
                {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
              {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
           {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
           {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
          {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
           {name:"Reyna", rating: 3.5, feedback: ""},
]
 
/* Task 3: Console.log just Julius' feedback */

console.log(reviews[5].feedback);

/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */


/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"

/*  Task 6: Write a function to return a review based on the index of the review in the array.

 Your function should take two arguments:

(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.

and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/
function getReviewByIndex(reviews, index) {
  return ${arr[index].name} gave the resturant a $(arr[index].rating), add their feedback was: $(arr[index].feedback);
  }
  

/* Task 7: Write a function to get information about the most recent review called `getLastReview`

getLastReview should accept:
  (1) an array of objects 
  
and should return a string in the format `name} gave the restaurant a {rating}, and their feedback was: {feedback}`

For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/
function getLastReview(/* code here */) {
    /* code here */
  } 


///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept: 

  (1) An array of objects
  (2) A rating

  and should return an array of objects. 

  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}]
*/

 function getReviewByRating(/* code here */) {
    /* code here */
  }

  
/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/
  function getLongReviews(/* code here */) {
    /* code here */
  }
  

/* STRETCH 3:  This challenge is not related to the data above! 

Write a function called carMarker 

Your function should accept:

(1) a single odometer argument (a number) 

and return an object.

The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/


function carMaker(/* code here */) {
    /* code here */
    
}
