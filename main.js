function checkFood(d){
    if(typeof(d)=='object'){
        for(let i = 0; i < Object.keys(d).length; i++){
            checkFood(Object.values(d)[i])
        }
    }
    if(typeof(d)=='list'){
        for(let i = 0; i < d.length; i++){
            checkFood(d[i])
        }
    }
    if(typeof(d)=='string'){
        console.log(d)
    }
}
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
checkFood(person3)



function Person(name,age){
    this.name = name;
    this.age = age;
    this.printInfo = () => {
        return(`${this.name} is ${this.age} years old`);
    }
    this.addAge = (a) => {
        this.age+=a;
    }
}

let dick = new Person('Richard Feynman',104);
let mick = new Person('Mike Tren',21);

console.log(dick.printInfo())
console.log(mick.printInfo())

console.log(mick.addAge(3))
console.log(mick.printInfo())



const isBigString = (s) => {
    return new Promise( (resolve,reject) => {
        if(s.length >=10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}


isBigString('mcahnagmehhhhh')
.then( (result) => {
    console.log(`Big Word`)
})
//Sad Reject path
.catch( (error) => {
    console.log(`Smol word`)
})