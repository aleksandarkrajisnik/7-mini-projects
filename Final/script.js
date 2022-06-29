const nameBtn = document.getElementById('nameBtn');
const capitalBtn = document.getElementById('capitalBtn');
const populationBtn = document.getElementById('populationBtn');
let nameState = 0;
let capitalState = 0;
let populationState = 0;
const userInput = document.getElementById('userInput')
const resultDiv = document.getElementById('resultDiv');
let searchedArr = [];
let countriesArr = [];
let htmlCountriesArr = [];

//SORTING FUNCTIONS
const sortByName = (array) =>{
        if(nameState === 0){
            array.sort((a, b) => a.name.localeCompare(b.name))
            nameState += 1;
            console.log(array);
        } else if(nameState === 1){
            array.sort((a, b) => b.name.localeCompare(a.name))
            nameState -= 1;
            console.log(array);
        }
        return 0; 
}

const sortByPopulation = (array) =>{
    if(populationState === 0){
        array.sort((a, b) => a.population > b.population ? 1 : -1)
        populationState += 1;
        console.log(array);
    } else if(populationState === 1){
        array.sort((a, b) => a.population > b.population ? -1 : 1)
        populationState -= 1;
        console.log(array);
    }
    return 0; 
}

const sortByCapital = (array) =>{
    if(capitalState === 0){
        array.sort((a, b) => a.capital > b.capital  ? 1 : -1)
        capitalState += 1;
        console.log(array);
    } else if(capitalState === 1){
        array.sort((a, b) => a.capital  > b.capital  ? -1 : 1)
        capitalState -= 1;
        console.log(array);
    }
    return 0; 
}


//COUNTRY DIV RENDERER
const divMaker = (arr) =>{

    htmlCountriesArr=[];
    resultDiv.innerHTML = '';

    arr.map(item =>{
        htmlCountriesArr.push(`
        <div class="countryDiv">
            <img class="flag" src=${item.flag}></img>
            <h3>${item.name}</h3>
            <h4><span>Capital: </span>${item.capital}</h4>
            <h4 class="languages"><span>Languages: </span>${Object.values(item.languages).join(', ')}</h4>
            <h4><span>Population: </span>${numberWithCommas(item.population)}<h5>
        </div>
        `)
    })

    htmlCountriesArr.forEach(element => {
        resultDiv.insertAdjacentHTML('afterbegin', element);
     });
} 

//FORMATS POPULATION NUMBER
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const languageCheck = (array, value) =>{
    const stringedArray = array.join(', ');
        if(stringedArray.includes(value)){
            return true;
        }
}

//FETCH API
async function fetching(){
    userInput.value = '';
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json();
    
    console.log(data);
    
    countriesArr = data.map(item =>(
       {
        name: item.name.common,
        flag:item.flags.png,
        capital: item.capital??[0],
        languages: item.languages !== undefined ? item.languages : '',
        population: item.population
       }
    ));

    
  
      divMaker(countriesArr);    
}


//EVENT LISTENERS

nameBtn.addEventListener('click', ()=>{
    if(searchedArr.length < 1){
        sortByName(countriesArr);
        divMaker(countriesArr);
    } else {
        sortByName(searchedArr);
        divMaker(searchedArr);
    }
    
});

capitalBtn.addEventListener('click', ()=>{
    if(searchedArr.length < 1){
        sortByCapital(countriesArr);
        divMaker(countriesArr);
    } else {
        sortByCapital(searchedArr);
        divMaker(searchedArr);
    }
});

populationBtn.addEventListener('click', ()=>{
    if(searchedArr.length < 1){
        sortByPopulation(countriesArr);
        divMaker(countriesArr);
    } else {
        sortByPopulation(searchedArr);
        divMaker(searchedArr);
    }
    
});

userInput.addEventListener('input', (e) =>{
    const input = e.target.value;
    resultDiv.innerHTML='';
    searchedArr = [];

    if(input === ''){
        fetching();
    } else{
        countriesArr.forEach(item=>{
            if(item.name.startsWith(input)){
                   resultDiv.innerHTML='';
                   console.log(item.name)
                    searchedArr.push(item);
                    divMaker(searchedArr);
                   
            } else if (typeof item.capital[0] === 'string' && item.capital[0].startsWith(input)){
                   resultDiv.innerHTML='';
                   searchedArr.push(item);
                   divMaker(searchedArr);
            } else if (languageCheck(Object.values(item.languages), input)){
            resultDiv.innerHTML='';
            searchedArr.push(item);
            divMaker(searchedArr);
            }    
           })
    }
})



fetching();