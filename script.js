const messages = [
    "Sei sicura?",
    "Davvero sicura??",
    "Sei proprio sicura bubi?",
    "Bubbola per favore...",
    "Pensaci su!",
    "Se dici di no, sarò davvero triste...",
    "Sarò molto triste bimba...",
    "Sarò molto molto molto triste...",
    "Va bene, smetterò di chiedere...",
    "Sto scherzando, per favore dì di sì! ❤️"
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
