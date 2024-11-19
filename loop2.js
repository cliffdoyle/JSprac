const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
for(let item of people){
    if (item==="Lola" || item==="Phil"){
        refused.textContent+=item+","

    }else{
        admitted.textContent+=item+", "
    }
}