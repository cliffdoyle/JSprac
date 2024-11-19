const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
for(let cat of cats){
    console.log(`${'here are them cats one by one'}`,cat)
}

//map() and filter()
//Use map() to do something to each item in a collection 
//It creates a new collection containing the changed items

// const fu=word=>{
//     return word.toUpperCase()
// }

const upperCaseCats=cats.map((word)=>word.toUpperCase())

console.log(upperCaseCats)

//Use filter() to test each item in a collection, and create a new collection containing only items that match

// const fili=cat=>{
//     return cat.startsWith('T')
// }

const filtered=cats.filter((cat)=>cat.startsWith('L'))

console.log(filtered)
