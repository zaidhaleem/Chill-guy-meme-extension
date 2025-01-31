fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokes =>{
    const jokeText = jokes.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement')

    jokeElement.innerHTML = jokeText;
})