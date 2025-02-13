const messages = [
    "Are you sure?",
    "DAMN really?",
    "NO WAYYYYYYYYYYY ",
    "sah sah l7choummaaaa",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "am deadass dead inside :(",
    "am gonna kms",
    "ONG IF U CLICK THIS WERE DONE ",
    "PLEASEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}