const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const planetSelect = document.getElementById('planetSelect');
const planetImg = document.getElementById('planetImg');
const result = document.getElementById('weight');
const calculatedMass = 0;

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    if(userInput.value === ''){
        result.textContent = "wrong input";
        return;
    } else{

       switch(planetSelect.value){
            case 'Earth':
                planetImg.className = '';
                planetImg.classList.add('earth');
                result.textContent = userInput.value + ' N';
                break;
            case 'Mars':
                planetImg.className = '';
                planetImg.classList.add('mars');
                result.textContent = userInput.value * 2 + ' N';
                break;
            case 'Jupiter':
                planetImg.className = '';
                planetImg.classList.add('jupiter');
                result.textContent = userInput.value * 3 + ' N';
                break;
            case 'Venus':
                planetImg.className = '';
                planetImg.classList.add('venus');
                result.textContent = userInput.value * 4 + ' N';
                break;
            case 'Saturn':
                planetImg.className = '';
                planetImg.classList.add('saturn');
                result.textContent = userInput.value * 5 + ' N';
                break;
            case 'Uranus':
                planetImg.className = '';
                planetImg.classList.add('uranus');
                result.textContent = userInput.value * 6 + ' N';
                break;
            case 'Neptune':
                planetImg.className = '';
                planetImg.classList.add('neptune');
                result.textContent = userInput.value * 7 + ' N';
                break;
            case 'Mercury':
                planetImg.className = '';
                planetImg.classList.add('mercury');
                result.textContent = userInput.value * 8 + ' N';
                break;
        }
    }
})