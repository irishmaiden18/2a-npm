//when starting a node project, in the terminal type "npm init -y" it will set up the project for you

//check npm for documentation

//npm i prompt-sync
const prompt = require("prompt-sync")({ sigint: true })

//npm i chalk@4.1.2, use the older version because of a compatibility issue with the newer version
//lets you change colors and styles of terminal text
const chalk = require("chalk")

//mpm i figlet
//lets you draw word art in terminal
const figlet = require("figlet")

//npm i lodash
//useful utility library
const _ = require("lodash")

//npm i @faker-js/faker
//creates fake data
//probably in curly braces because there are other things we could import, it is not the default export
const {faker} = require('@faker-js/faker')

//npm install dayjs
const dayjs = require("dayjs")




//Chalk
// console.log(chalk.blue("Hello World!"))

// console.log(`${chalk.yellow("Hello")} ${chalk.green("World")}!!`)

// console.log(chalk.bgBlue("Hello World!"))

// console.log(chalk.bold("Hello World!"))
// console.log(chalk.blue.bgRed.strikethrough("Hello World!"))





//Figlet
// // figlet (text, font-object, callback)
// figlet("Express!", { font: "Slant" },(err, data) => {
//     if(!err){
//         console.log(chalk.blue(data))
//     } else {
//         console.log(err)
//     }
// })





//lodash
const array = [5,17,14,32,100,90,87,45,50,32]

// _.shuffle - randomizes an array (does not modify original)
// console.log(_.shuffle(array))
// console.log(array)

// _.sample - gets random element from array (no Math.random() required!) as a number
// console.log(_.sample(array))

// _sampleSize(array,n) - gets back n random items from the array as an array
// console.log(_.sampleSize(array, 3))

// const duplicateArray = [1,1,1,2,3,3,3,4,4,5,10]

// _.uniq()
// Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.
// console.log(_.uniq(duplicateArray));

const users = [
    { username: "fusion403", age: 45 },
    { username: "neutron543", age: 26 },
    { username: "vortex900", age: 24 },
    { username: "comet786", age: 40 }
]

// _.sortBy(array, "property") - sorts objects based on given property
// use .reverse() for descending

// sort By Age
// console.log(_.sortBy(users, "age"));

// sort by username
// console.log(_.sortBy(users, "username"))

// age descending order
// console.log(_.sortBy(users, "age").reverse())

// _.groupBy() - groups items in your array together based on criteria
// a nested object is created with properties (keys) that correspond to categories and arrays (values) of the elements that fit in to that category, returns this object
const organizeByAge = _.groupBy(users, (user) => {
    if(user.age > 30){
        // property that the users with age over 30 will be grouped into
        return "over30"
    } else {
        return "underOrEqualTo30"
    }
})
// console.log(organizeByAge)

// can also specify the property name in a string and it will groupBy that as well!
const organizeByUsernameLength = _.groupBy(users, "username.length");
// console.log(organizeByUsernameLength)

const str = "hello world and express!"
// console.log(_.capitalize(str))

// console.log(_.camelCase(str))

// console.log(_.kebabCase(str))

// console.log(_.snakeCase(str))

// console.log(_.repeat("yay! ", 5))

//  _.words - splits string into words, ignoring all symbols
// console.log(_.words(str))

const newUser = {
    name: "George Express",
    age: 25,
    city: "NYC",
    email: "george@express.com",
    id: 101,
    password: "george-express1000"
}

// _.pick(object,["properties"]) - picks properties from an object that you want and places them into a new object
// console.log(_.pick(newUser, ["name", "email", "id"]))

//_.omit(object, ["properties]"]) - excludes certain properties from an object
// console.log(_.omit(newUser, ["id", "email", "password"]))

// _.keys - creates an array of keys from a given object 
// console.log(_.keys(newUser))

// _.values - creates an array of values from a given object, the values of the various properties
// console.log(_.values(newUser))

const scores = [90, 100, 85, 90, 75, 98]
// console.log(`mean: ${_.mean(scores)}`);

// console.log(`sum: ${_.sum(scores)}`)

// _.random(a,b) - returns random number between a range (inclusive, includes possibility of both a and b )
// console.log(_.random(20,30))






// Faker - generates random data
// console.log(`Random username: ${faker.internet.username()}`)

// function to create random user
//the faker functions can be called outside of an object
const createRandomUser = () => {
    return { 
        //generates a random username
        username: faker.internet.username(),
        //generates a random userID
        userId: faker.string.uuid(),
        //generates a random city
        city: faker.location.city(),
        //generates a random animal type
        favoriteAnimal: faker.animal.type(),
        //generates a random date
        birthday: faker.date.birthdate()
     }
}
// console.log(createRandomUser())

// // faker.helpers.multiple(function that generates fake data, { count: n }) create multiple fake users
// const randomUsers = faker.helpers.multiple(createRandomUser, {
//   count: 5,
// });

// console.log(randomUsers)






// dayjs

// console.log(dayjs("2026-01-10").format("MM/DD/YYYY"))

// returns current day
const today = dayjs()
console.log(today)
console.log(today.format("MM/DD/YYYY"))

//can go forward in time
const tomorrow = today.add(1, "day").add("2", "year")
console.log(tomorrow.format("MM/DD/YYYY"))

//can go back in time
const yesterday = today.subtract(1, "day")
console.log(yesterday.format("MM/DD/YYYY"))

// Month (abbreviated) Day, Year
console.log(today.format('MMM D, YYYY'))