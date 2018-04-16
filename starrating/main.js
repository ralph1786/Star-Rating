//Initial Ratings
const ratings = {
    iphone: 4.6,
    samsung: 4.2,
    sony: 3.7,
    motorola: 3.8,
    lg: 4.1
}
//Total stars
const starsTotal = 5;

//Run getRatings function when DOM loads.
document.addEventListener('DOMContentLoaded', getRatings);

//Grab form elements
const productSelect = document.querySelector("#product-select");
const ratingControl = document.querySelector("#rating-control");

//Initialize product.
let product;

//Product select change.
productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    //Enable rating control.
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

//Rating control change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;
    //Make sure rating is 5 or under and not a negative number.
    if (rating > 5) {
        alert("Please enter a number between 0 and 5.");
        return;
    } else if (rating < 0) {
        alert("Please enter a number between 0 and 5.");
        return;
    }
    //Change rating.
    ratings[product] = rating;
    getRatings();
})

//Get ratings
function getRatings() {
    for (let rating in ratings) {
        //Get percentage
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        //Round to nearest tenth.
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        //Set width of stars-inner to percentage.
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
        //Add number rating.
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}