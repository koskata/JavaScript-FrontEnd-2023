function personInfo(firstName, lastName, age) {

    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

let all = personInfo("Peter", "Pan", 20);

console.log(all.firstName);
console.log(all.lastName);
console.log(all.age);