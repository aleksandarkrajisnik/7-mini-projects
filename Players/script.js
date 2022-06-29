let nameInput = document.getElementById('firstname');
let lastnameInput = document.getElementById('lastname');
let countryInput = document.getElementById('country');
let scoreInput = document.getElementById('score');
let addBtn = document.getElementById('addBtn');
let errorh1 = document.getElementById('error');
let playerHolder = document.getElementById('playerHolder');
let playerArr = [];

const playerListCreator = () =>{
    playerHolder.innerHTML = '';

        playerArr.forEach(item =>{
            const player = document.createElement('div');
            player.classList.add('playerDiv');
            player.addEventListener('click', clickHandler)
            playerHolder.appendChild(player);
            
            const name = document.createElement('h2');
            name.innerText = item.name;
            name.classList.add('name');
            player.appendChild(name);

            const lastname = document.createElement('h2');
            lastname.innerText = item.lastname;
            lastname.classList.add('lastname');
            player.appendChild(lastname);

            const country = document.createElement('h2');
            country.innerText = item.country;
            country.classList.add('country');
            player.appendChild(country);

            const score = document.createElement('h2');
            score.innerText = item.score;
            score.classList.add('score');
            player.appendChild(score);

            const joined = document.createElement('h3');
            joined.innerText = item.date;
            joined.classList.add('joined');
            player.appendChild(joined);

            const removeBtn = document.createElement('button');
            removeBtn.innerText = 'Trash';
            removeBtn.classList.add('removeBtn');
            player.appendChild(removeBtn);

            const addPointsBtn = document.createElement('button');
            addPointsBtn.innerText = '+5';
            addPointsBtn.classList.add('addPointsBtn');
            player.appendChild(addPointsBtn);

            const removePointsBtn = document.createElement('button');
            removePointsBtn.innerText = '-5';
            removePointsBtn.classList.add('removePointsBtn');
            player.appendChild(removePointsBtn);
        })
}

const clickHandler = (e) =>{
    const item = e.target;

    //REMOVE PLAYER
    if(item.classList[0] === 'removeBtn'){

        item.parentElement.remove();
        let userDate = item.parentElement.childNodes[4].innerText;
        let newplayerArr = playerArr.filter(item => item.date !== userDate);
        playerArr = [...newplayerArr];   

    }

    //INCREASE PLAYER POINTS
    if(item.classList[0] === 'addPointsBtn'){

        let result = 0;
        let userDate = item.parentElement.childNodes[4].innerText;
        playerArr.map(item =>{
            if(item.date === userDate){
                item.score += 5;
                result = item.score;
            }
        });
        item.parentElement.childNodes[3].innerText = result;
        
        playerArr.sort((a, b) => b.score - a.score)
        console.log(playerArr);

        playerListCreator();
    }

    //DECREASE PLAYER POINTS
    if(item.classList[0] === 'removePointsBtn'){

        let result = 0;
        let userDate = item.parentElement.childNodes[4].innerText;
        playerArr.map(item =>{
            if(item.date === userDate){
                item.score -= 5;
                result = item.score;
            }
        });
        item.parentElement.childNodes[3].innerText = result;

        playerArr.sort((a, b) => b.score - a.score)
        console.log(playerArr);

        playerListCreator();
    }
}

    //ADD NEW PLAYER
    const addPlayer = (e) =>{
    e.preventDefault();

    if(nameInput.value == '' || lastnameInput.value == '' || countryInput.value == '' || scoreInput.value == ''){
        errorh1.innerText = 'All fields must be filled out'
    } else {
        errorh1.innerText = ''

        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        playerArr.push({
            name: nameInput.value,
            lastname: lastnameInput.value,
            country: countryInput.value,
            score: parseInt(scoreInput.value),
            date
        })
        
        playerArr.sort((a, b) => b.score - a.score)

        playerListCreator();

        nameInput.value = '';
        lastnameInput.value = '';
        countryInput.value = '';
        scoreInput.value = '';
    }
}

addBtn.addEventListener('click', addPlayer);