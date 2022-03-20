const apiUrl = 'https://api.adviceslip.com/advice';
const idElement = document.getElementById('id');
const quoteElement = document.getElementById('quote');

/* Use api to get a random quote */
async function getRandomQuote() {
    const response = await fetch('https://api.adviceslip.com/advice');
    var data = await response.json();

    if(data) {
        idElement.innerHTML = data.slip.id;
        quoteElement.innerHTML = `\"${data.slip.advice}\"`;
    }
}

/* Get random quote on app load */
getRandomQuote();

/* Listen for click events and update the quote */
document.getElementById('dice-container').addEventListener('click', () => {
    getRandomQuote();
})