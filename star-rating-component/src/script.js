const stars = document.querySelectorAll(".star");
const message = document.querySelector(".message");

const messageArray = [
    "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
    "We apologize for the inconvenience you experienced.We appreciate your feedback and would like to work with you to address any issues.",
    "Thank you for your feedback.We're sorry to hear that your experience wasn't perfect.We would love to hear more about your concerns to see how we can improve.",
    "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
    "Excellent! We're thrilled to hear you had such a positive experience.Thank you for choosing our product / service.",
]

const rating = 0;

const showRating = (rating) => {
    message.innerHTML = messageArray[rating];
    stars.forEach((star, i) => {
        if (i <= rating) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

stars.forEach((star, i) => {
    ["click", "mouseover", "mouseout"].forEach(function (e) {
        star.addEventListener(e, () => showRating(i));
    })
});