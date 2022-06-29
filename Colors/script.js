const container = document.getElementById('container');
const sentence = '30 days of JavaScript';
const sentenceArr = [...sentence];


console.log(sentenceArr);

sentenceArr.forEach(item=>{
    const letter = document.createElement('h1');
    
    letter.innerText = item;
    letter.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    container.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    container.appendChild(letter);
})

const listOfElements = document.getElementsByClassName('letter');

setInterval(()=>{
    container.innerHTML = '';
    sentenceArr.forEach(item=>{
        const letter = document.createElement('h1');
        
        letter.innerText = item;
        letter.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        container.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        container.appendChild(letter);
    })

}, 1500)