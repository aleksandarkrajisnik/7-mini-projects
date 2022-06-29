let countryData = document.getElementById('countryData');
let userInput = document.getElementById('userInput');
let startBtn = document.getElementById('start');
let anyBtn = document.getElementById('any');
let sortBtn = document.getElementById('sort');
let switchValue = 0;
let htmlNiz = [];
let niz = [];

startBtn.addEventListener('click', ()=>{
    switchValue = 0;
    startBtn.style.backgroundColor = 'orange';
    anyBtn.style.backgroundColor = 'rgb(237, 236, 236)';
    console.log(switchValue)
})

anyBtn.addEventListener('click', ()=>{
    switchValue = 1;
    startBtn.style.backgroundColor = 'rgb(237, 236, 236)';
    anyBtn.style.backgroundColor = 'orange';
    console.log(switchValue)
})

async function fetching(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json();
    
    niz = data.map(item => item.name.common);

     let divMaker = (arr) =>{
        arr.map(item =>{
            htmlNiz.push(`<div class="countryDiv">${item}</div>`)
        })
    } 

    
        divMaker(niz);
        htmlNiz.forEach(element => {
           countryData.insertAdjacentHTML('afterbegin', element)
        });
      
}

fetching();

userInput.addEventListener('input', e=>{
    if(switchValue === 0){
        htmlNiz = [];
        niz.forEach(item =>{
        if(item.startsWith(e.target.value)){
            htmlNiz.push(`<div class="countryDiv">${item}</div>`)
        }
         })
         countryData.innerHTML = '';
         htmlNiz.forEach(element => {
             countryData.insertAdjacentHTML('afterbegin', element)
          });
    }

    if(switchValue === 1){
        htmlNiz = [];
        niz.forEach(item =>{
        if(item.includes(e.target.value)){
            htmlNiz.push(`<div class="countryDiv">${item}</div>`)
        }
         })
         countryData.innerHTML = '';
         htmlNiz.forEach(element => {
             countryData.insertAdjacentHTML('afterbegin', element)
          });
    }
})



sortBtn.addEventListener('click', () =>{
    niz.sort(function(a, b){
        if(a < b) { return 1; }
        if(a > b) { return -1; }
        return 0;
    })

    if(switchValue === 0){
        htmlNiz = [];
        niz.forEach(item =>{
            if(item.startsWith(userInput.value)){
                htmlNiz.push(`<div class="countryDiv">${item}</div>`)
            }
            
         })
        countryData.innerHTML = '';
        htmlNiz.forEach(element => {
            countryData.insertAdjacentHTML('afterbegin', element)
        });
    }

    if(switchValue === 1){
        htmlNiz = [];
        niz.forEach(item =>{
            if(item.includes(userInput.value)){
                htmlNiz.push(`<div class="countryDiv">${item}</div>`)
            }
            
         })
        countryData.innerHTML = '';
        htmlNiz.forEach(element => {
            countryData.insertAdjacentHTML('afterbegin', element)
        });
    }
  


});
