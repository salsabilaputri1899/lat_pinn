const myfunction = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}

myfunction()

//console.log(( () => 'Hi Salsabila!'))
console.log(( (x) => x)('I\'m a function'))

// yang kedua
const myfunction = () => {
    return 'I\'m a regular function'
}

console.log(myfunction())

console.log(( (x) => x)('I\'m a function'))

//bisa diringkas
const myfunction = () => 'I\'m a regular function'

console.log(myfunction())

console.log(( (x) => x)('I\'m a function'))