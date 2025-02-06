
let quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Do what you can, with what you have, where you are.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Your limitation—it's only your imagination."
];

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    const quoteText = document.getElementById("quote");

    button.addEventListener("click", function () {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.innerText = quotes[randomIndex];
    });
});



