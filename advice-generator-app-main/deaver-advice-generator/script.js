const apiUrl = 'https://api.adviceslip.com/advice';
const idElement = document.getElementById('id');
const quoteElement = document.getElementById('quote');

async function getRandomQuote() {
    const response = await fetch('https://api.adviceslip.com/advice');

    var data = await response.json();

    console.log(data.slip.id);
    console.log(data.slip.advice)
    console.log(data.slip);
    idElement.innerHTML = data.slip.id;
    quoteElement.innerHTML = `\"${data.slip.advice}\"`;
}

getRandomQuote();

document.getElementById('dice-container').addEventListener('click', () => {
    getRandomQuote();
})