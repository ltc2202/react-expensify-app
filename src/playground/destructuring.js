// const person = {
//     name: 'Harry',
//     age: 23,
//     location: {
//         city: 'Melbourne',
//         temp: 30
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// Object Destructuring

const address = ['123 Highway', 'Melbourne'];

const [, , state = 'New York'] = address;

console.log(`You are in ${state}.`);