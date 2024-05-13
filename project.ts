// QUESTION NO 1
console.log("mustafa");



//QUESTION NO 2
// Store the person's name in a variable
let myname = "Mustafaazhar";
let message = "I am fine"

// Print a message to the person
console.log(myname+''+message);


//QUESTION NO 3
// Store the person's name in a variable
let myName = "Mustafa azhar";

// Print my  name in lowercase
console.log("Lowercase:", myName.toLowerCase());

// Print my name  in uppercase
console.log("Uppercase:", myName.toUpperCase());

// Print  my name in titlecase
console.log("Titlecase:", myName.replace(/\b\w/g, (char) => char.toUpperCase()));



//QUESTION NO 4

// Define the quote and its author
let quote = "Imagination is more important than knowledge.";
let author = "Albert Einstein";

// Print the quote and its author
console.log(`"${quote}" - ${author}`);


//QUESTION NO 5

// Store the famous person's name in a variable
let famous_person: string = "Steve Jobs";

// Define the quote
let quote2  = "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.";

// Compose the message
let message2  = `"${quote}" - ${famous_person}`;

// Print the message
console.log(message2+''+quote2);


//QUESTION NO 6

// Store the person's name with whitespace characters
let nameWithWhitespace = "\t\n   mustafa azhar   \t\n";

// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);

// Strip the whitespace from the name
let strippedName = nameWithWhitespace.trim();

// Print the stripped name
console.log("Stripped name:", strippedName);

//Question no 7
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//QUESTION NO 8
let favoriteNumber: number = 7;
console.log("My favorite number is:", favoriteNumber);


//Question no 9

// Number Eight
// Perform addition operation
console.log(5 + 3);

// Perform subtraction operation
console.log(10 - 2);

// Perform multiplication operation
console.log(4 * 2);

// Perform division operation
console.log(16 / 2);

// Favorite Number
// Store my favorite number in a variable
let favoriteNumber2: number = 7;

// Print a message revealing my favorite number
console.log("My favorite number is:", favoriteNumber2);

//QUESTION NO 10
// Store the names of friends in an array
let names: string[] = ["ali", "amir", "aliya", "amna", "aftab"];

// Print each person's name by accessing each element in the list, one at a time
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}



//QUESTION NO 11 
// Start with the array of names from the previous task

// Print a personalized message to each person
for (let i = 0; i < names.length; i++) {
    console.log("Hello, " + names[i] + "! Have a great day!");
}

//QUESTION NO 12

// Define an array of favorite modes of transportation
let modesOfTransportation: string[] = ["car", "motorcycle", "bicycle", "train"];

// Print statements about each item in the array
for (let i = 0; i < modesOfTransportation.length; i++) {
    console.log("I would like to own a " + modesOfTransportation[i] + ".");
}

//QUESTION NO 13

// Make a list of people to invite to dinner
let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Print a message inviting each person to dinner
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are invited to dinner. Please join us!");
}

//QUESTION NO 14

// Start with the program from the previous task

// Someone can't make it to dinner
let unableToAttend = guests.pop(); // Removing the last person from the list
console.log("Unfortunately, " + unableToAttend + " can't make it to dinner.");

// Replace the person who can't make it with someone else
guests.push("Nikola Tesla");

// Print a new set of invitation messages
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are invited to dinner. Please join us!");

}
//QUESTION NO 15

// Start with the program from the previous task

// Found a bigger dinner table
console.log("Great news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
guests.unshift("Ada Lovelace");

// Add one new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, "Isaac Newton");

// Add one new guest to the end of the array
guests.push("Grace Hopper");

// Print a new set of invitation messages
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are invited to dinner. Please join us!");
}

//QUESTION NO 16


// Start with the program from the previous task

// The new dinner table won't arrive in time, can invite only two people
console.log("Unfortunately, the new dinner table won't arrive in time. I can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log("Sorry, " + removedGuest + ", I can't invite you to dinner.");
}

// Print a message to each of the two people still on the list, letting them know they're still invited
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you're still invited to dinner.");
}

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the list to make sure it's empty
console.log("Updated guest list:", guests);


//QUESTION NO 17


// Think of at least five places in the world you'd like to visit
let placesToVisit: string[] = ["Kyoto", "Santorini", "Machu Picchu", "Banff National Park", "Galápagos Islands"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", placesToVisit.slice().sort());

// Print the array to show that it's still in its original order
console.log("Original order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", placesToVisit.slice().sort().reverse());

// Print the array to show that it's still in its original order
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("Sorted order:", placesToVisit);

// Sort to change the array so it's stored in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse sorted order:", placesToVisit);


//QUESTION NO 19
// Working with the program from the previous tasks

// Print a message indicating the number of people being invited to dinner
console.log("Number of people invited to dinner:", guests.length);

//QUESTION NO 20

// I'll create an array to store the names of different programming languages

let programmingLanguages: string[] = ["JavaScript", "Python", "TypeScript", "Java", "C++"];

// Printing the array
console.log("Programming Languages:", programmingLanguages);


//QUESTION 21

// I'll create an object to store information about a book

let book: {title: string, author: string, pages: number} = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 218
};

// Printing the book object
console.log("Book:", book);


//QUESTION NO 22

// Trying to access an element in an array using an index that doesn't exist
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits[3]); // This will produce an error because there is no element at index 3


//QUESTION NO 23

// Define a variable
let age: number = 25;

// Conditional tests
console.log("Is age greater than 18? I predict True.");
console.log(age > 18);

console.log("Is age less than 18? I predict False.");
console.log(age < 18);

console.log("Is age equal to 25? I predict True.");
console.log(age === 25);

console.log("Is age not equal to 25? I predict False.");
console.log(age !== 25);

console.log("Is age greater than or equal to 25? I predict True.");
console.log(age >= 25);

console.log("Is age less than or equal to 25? I predict True.");
console.log(age <= 25);
   


//QUESTION  NO 24

// Tests for equality and inequality with strings
let color: string = 'blue';
console.log("Is color equal to 'blue'? I predict True.");
console.log(color === 'blue');

console.log("Is color not equal to 'red'? I predict True.");
console.log(color !== 'red');

// Tests using the lower case function
let fruit: string = 'Apple';
console.log("Is fruit equal to 'apple'? I predict False.");
console.log(fruit.toLowerCase() === 'apple');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number: number = 10;
console.log("Is number equal to 10? I predict True.");
console.log(number === 10);

console.log("Is number greater than 5? I predict True.");
console.log(number > 5);

console.log("Is number less than 20? I predict True.");
console.log(number < 20);

console.log("Is number greater than or equal to 10? I predict True.");
console.log(number >= 10);

console.log("Is number less than or equal to 10? I predict True.");
console.log(number <= 10);

// Tests using "and" and "or" operators
let x: number = 5;
let y: number = 10;
console.log("Is x less than 10 and y greater than 5? I predict True.");
console.log(x < 10 && y > 5);

console.log("Is x less than 10 or y greater than 15? I predict True.");
console.log(x < 10 || y > 15);

// Test whether an item is in an array
let fruits2: string[] = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));


//QUESTION NO 25


// Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color: string = 'green';

// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

//QUESTION NO 26

// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.

let alien_color2: string = 'red';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}


//QUESTION NO 27

// Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.

let alien_color3: string = 'yellow';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}


//QUESTION NO 28

// Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age, and then:
// If the person is less than 2 years old, print a message that the person is a baby.
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// If the person is age 65 or older, print a message that the person is an elder.

let age1: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

//QUESTION NO 29

// Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make an array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["apple", "banana", "mango"];

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

//QUESTION NO 30

// Make an array of five or more usernames, including the name 'admin'.
// Loop through the array, and print a greeting to each user:
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames: string[] = ["admin", "john", "alice", "bob", "smith"];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello " + username + ", thank you for logging in again.");
    }
}

//QUESTION NO 31


// Add an if test to check if the list of users is not empty.
// If the list is empty, print the message "We need to find some users!"
// Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames2: string[] = ["admin", "john", "alice", "bob", "smith"];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello " + username + ", thank you for logging in again.");
        }
    }
}

// Clear the array
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}

//QUESTION NO 32

// Make a list of current users and new users
let current_users: string[] = ["admin", "john", "alice", "bob", "smith"];
let new_users: string[] = ["alice", "john", "dave", "emily", "chris"];

// Loop through the new_users list to check if each new username has already been used
for (let new_user of new_users) {
    if (current_users.includes(new_user.toLowerCase())) {
        console.log("Sorry, " + new_user + " is already taken. Please choose a different username.");
    } else {
        console.log(new_user + " is available!");
    }
}


//QUESTION NO 33

// Store the numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Use an if-else chain inside the loop to print the proper ordinal ending for each number
    let ordinal;
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    console.log(number + ordinal);
}
//QUESTION NO 34

// Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and then use a for loop to print the name of each pizza.
let pizzas: string[] = ["Margherita", "Pepperoni", "Hawaiian"];

// Print the name of each pizza
for (let pizza of pizzas) {
    console.log(pizza);
}

// Modify the for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
for (let pizza of pizzas) {
    console.log("I like " + pizza + " pizza.");
}

// Add a line at the end of your program, outside the for loop, that states how much you like pizza.
console.log("I really love pizza!");


//QUESTION NO 35


// Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the name of each animal
for (let animal of animals) {
    console.log(animal);
}

// Modify your program to print a statement about each animal.
for (let animal of animals) {
    console.log("A " + animal.toLowerCase() + " would make a great pet.");
}

// Add a line at the end of your program stating what these animals have in common.
console.log("Any of these animals would make a great pet!");


//QUESTION NO 36

// Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message: string): void {
    console.log("Size: " + size + ", Message: " + message);
}

// Call the function
make_shirt("Large", "I love TypeScript");


//QUESTION NO 37

// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt1(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log("Size: " + size + ", Message: " + message);
}

// Call the function to create a large shirt with the default message
make_shirt1();

// Call the function to create a medium shirt with the default message
make_shirt1("Medium");

// Call the function to create a small shirt with a different message
make_shirt("Small", "I love programming!");

//QUESTION NO 38

// Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan.
// Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string = "Unknown"): void {
    console.log(city + " is in " + country);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Paris");

//QUESTION NO 39

// Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this: "Lahore, Pakistan".
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string): string {
    return city + ", " + country;
}

// Call the function with city-country pairs and print the returned value
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Rio de Janeiro", "Brazil"));


//QUESTION NO 40

// Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.

function make_album(artist: string, title: string): object {
    return {
        artist: artist,
        title: title
    };
}

// Call the function to create three albums
let album1 = make_album("Taylor Swift", "Fearless");
let album2 = make_album("Ed Sheeran", "Divide");
let album3 = make_album("Beyonce", "Lemonade");

// Print each album to verify the information
console.log(album1);
console.log(album2);
console.log(album3);

//QUESTION NO 41
// Make an array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define an array of magician names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the function
show_magicians(magicians);

//QUESTION NO 42

// Define the show_magicians function
function show_magicians1(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Define the make_great function to modify the magicians array
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Define an array of magician names
let m

//QUESTION NO 43

// Define the show_magicians function
function show_magicians2(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function to modify a copy of the magicians array
function make_grea1t(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}

// Define an array of magician names
let originalMagicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the make_great function with a copy of the original array
let greatMagicians2  = make_great(originalMagicians.slice());

// Call the show_magicians function with both arrays to demonstrate the difference
console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");


//QUESTION NO 44
// Write a function that accepts an array of items a person wants on a sandwich
function make_sandwich(items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function three times with a different number of arguments each time
console.log("Order 1:");
make_sandwich(["Ham", "Cheese"]);

console.log("\nOrder 2:");
make_sandwich(["Turkey", "Lettuce", "Tomato", "Mayonnaise"]);

console.log("\nOrder 3:");
make_sandwich(["Peanut Butter", "Jelly"]);


//QUESTION NO 45

// Write a function that stores information about a car in an Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.

function storeCarInfo(manufacturer: string, model: string, ...extras: [string, any][]): object {
    let carInfo: { manufacturer: string, model: string } = {
        manufacturer: manufacturer,
        model: model
    };
    // Add optional information
    for (let extra of extras) {
        carInfo[extra[0]] = extra[1];
    }
    return carInfo;
}

// Call the function with required information and additional details
let carDetails = storeCarInfo("Toyota", "Corolla", ["color", "blue"], ["year", 2022], ["sunroof", true]);
console.log(carDetails);

// I SOLVED ALL 45 QUESTIONS 














