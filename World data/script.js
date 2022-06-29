const languagesBtn = document.getElementById('languagesBtn');
const populationBtn = document.getElementById('populationBtn');
const targetDiv = document.getElementById('dataDiv');

let languages = `<div class="langDiv">
<h2>English</h2>
    <div class="slideHolder">
        <div class="bar eng"></div>
    </div>
<h2>91</h2>
</div>

<div class="langDiv">
<h2>French</h2>
    <div class="slideHolder">
        <div class="bar fra"></div>
    </div>
<h2>45</h2>
</div>

<div class="langDiv">
<h2>Arabic</h2>
    <div class="slideHolder">
        <div class="bar arab"></div>
    </div>
<h2>25</h2>
</div>

<div class="langDiv">
<h2>Spanish</h2>
    <div class="slideHolder">
        <div class="bar esp"></div>
    </div>
<h2>24</h2>
</div>

<div class="langDiv">
<h2>Portugese</h2>
    <div class="slideHolder">
        <div class="bar por"></div>
    </div>
<h2>9</h2>
</div>

<div class="langDiv">
<h2>Russian</h2>
    <div class="slideHolder">
        <div class="bar rus"></div>
    </div>
<h2>9</h2>
</div>

<div class="langDiv">
<h2>Dutch</h2>
    <div class="slideHolder">
        <div class="bar ned"></div>
    </div>
<h2>8</h2>
</div>

<div class="langDiv">
<h2>German</h2>
    <div class="slideHolder">
        <div class="bar ger"></div>
    </div>
<h2>7</h2>
</div>

<div class="langDiv">
<h2>Chinese</h2>
    <div class="slideHolder">
        <div class="bar chi"></div>
    </div>
<h2>5</h2>
</div>

<div class="langDiv">
<h2>Serbian</h2>
    <div class="slideHolder">
        <div class="bar ser"></div>
    </div>
<h2>4</h2>
</div>`


let population = `
<div class="langDiv">
                <h2>World</h2>
                    <div class="slideHolder">
                        <div class="bar world"></div>
                    </div>
                <h2>234234</h2>
            </div>

            <div class="langDiv">
                <h2>China</h2>
                    <div class="slideHolder">
                        <div class="bar china"></div>
                    </div>
                <h2>345345</h2>
            </div>

            <div class="langDiv">
                <h2>India</h2>
                    <div class="slideHolder">
                        <div class="bar india"></div>
                    </div>
                <h2>465456</h2>
            </div>

            <div class="langDiv">
                <h2>USA</h2>
                    <div class="slideHolder">
                        <div class="bar usa"></div>
                    </div>
                <h2>24234</h2>
            </div>

            <div class="langDiv">
                <h2>Indonesia</h2>
                    <div class="slideHolder">
                        <div class="bar indonesia"></div>
                    </div>
                <h2>121579</h2>
            </div>

            <div class="langDiv">
                <h2>Brasil</h2>
                    <div class="slideHolder">
                        <div class="bar brasil"></div>
                    </div>
                <h2>95937</h2>
            </div>
            
            <div class="langDiv">
                <h2>Pakistan</h2>
                    <div class="slideHolder">
                        <div class="bar pakistan"></div>
                    </div>
                <h2>82423</h2>
            </div>

            <div class="langDiv">
                <h2>Nigeria</h2>
                    <div class="slideHolder">
                        <div class="bar nigeria"></div>
                    </div>
                <h2>324327</h2>
            </div>

            <div class="langDiv">
                <h2>Bangladesh</h2>
                    <div class="slideHolder">
                        <div class="bar bangladesh"></div>
                    </div>
                <h2>5342342</h2>
            </div>

            <div class="langDiv">
                <h2>Russia</h2>
                    <div class="slideHolder">
                        <div class="bar russia"></div>
                    </div>
                <h2>334434</h2>
            </div>

            <div class="langDiv">
                <h2>Japan   </h2>
                    <div class="slideHolder">
                        <div class="bar japan"></div>
                    </div>
                <h2>45534</h2>
            </div>
            
`

languagesBtn.addEventListener('click', e =>{
    e.preventDefault();
    targetDiv.innerHTML = '';
    targetDiv.insertAdjacentHTML('afterbegin', languages)
})

populationBtn.addEventListener('click', e =>{
    e.preventDefault();
    targetDiv.innerHTML = '';
    targetDiv.insertAdjacentHTML('afterbegin', population)
})