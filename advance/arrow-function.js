const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))
const people = [{
    name:'ahmed',
    age: 28
},{
    name: 'andrew',
    age: 31
},{
    name: 'tarq',
    age: 22
}
]

// const under30 = people.filter(function(person){
//     return person.age < 30
//})

const under30 = people.filter((person)=> person.age < 30)
console.log(under30)

// it works with = or === (so i used = only one)
const challenge = people.find((person)=> person.age = 22)
console.log(challenge.name)