const btn =document.querySelector('button')

const rand=(number)=>{
    return Math.floor(Math.random()*(number +18))
}

btn.addEventListener('click' ,()=>{
const rndCol=`rgb(${rand(255)} ${rand(255)} ${rand(255)})`
document.body.style.backgroundColor=rndCol
})