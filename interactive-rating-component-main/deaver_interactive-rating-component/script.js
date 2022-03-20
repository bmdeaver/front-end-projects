var rating = null;
var prevSelectedRating = null;

/* Add click event listener to each child node */
var optionElements = document.querySelectorAll('.rating-options > div');

for(var i = 0; i < optionElements.length; i++){
    optionElements[i].addEventListener('click', event => {
        rating = event.currentTarget.innerText;
                
        if(prevSelectedRating !== null) {
            optionElements[prevSelectedRating].classList.remove('option-selected');
        }

        prevSelectedRating = rating - 1;
        event.currentTarget.classList.add('option-selected');
    })
}

/* Set inner text and flip the card */
document.getElementById('submit-btn').addEventListener('click', ()  => {
   if(rating !== null) {
        document.getElementsByClassName('rating-container')[0].innerText = `You selected ${rating} out of 5`
        document.getElementsByClassName('inner-card')[0].classList.add('rotate-card');
    }
})

