function showRandomMessage() {
    let messages = [
        "You are my sunshine! ☀️",
        "Every moment with you is special! 💖",
        "You make my world beautiful! 🌎",
        "I love you more than words can say! 😘",
        "You are my forever! 💍"
    ];

    let randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("hiddenMessage").innerHTML = messages[randomIndex];
    document.getElementById("hiddenMessage").style.display = "block";
}
