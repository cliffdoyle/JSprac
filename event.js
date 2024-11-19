const textb=document.querySelector('#textbox')
const outp=document.querySelector('#tel')

textb.addEventListener('keydown',(e)=>{
    outp.textContent=`you pressed ${e.key}`
})