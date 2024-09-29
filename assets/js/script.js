const jokeSetup = document.getElementById('joke-setup');
const punchlineContainer = document.getElementById('punchline-container');
const getJokeBtn = document.getElementById('get-joke-btn');
const newJokeBtn = document.getElementById('new-joke-btn');

// Initially set get joke button text to empty

// Add event listeners
getJokeBtn.addEventListener('click', fetchJoke);
newJokeBtn.addEventListener('click', fetchJoke);

function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => displayJoke(data));
}

function displayJoke(joke) {
    getJokeBtn.remove()
    jokeSetup.textContent = joke.setup;

    const answerBtn = document.createElement('button');
    answerBtn.textContent = 'Show Punchline';
    punchlineContainer.innerHTML = ''; 
    punchlineContainer.appendChild(answerBtn);

    answerBtn.addEventListener('click', () => {
        const punchline = document.createElement('p');
        punchline.textContent = joke.punchline;
        punchlineContainer.appendChild(punchline);
        answerBtn.style.display = 'none'; 

        newJokeBtn.classList.remove('hidden');
    });

    newJokeBtn.classList.add('hidden');
}
