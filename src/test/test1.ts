// Exercise:

//     Given the data, define the interface "User" and use it accordingly.

export type User = unknown;
export const users: User[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
/* In case if you are stuck:

// https://www.typescriptlang.org/docs/handbook/2/objects.html
*/
