function changeGift() {
    const giftDiv = document.getElementById("gift");
    const song = document.getElementById("song"); // Select the song element

    const gifts = {
        1: { emoji: "😊", text: "Friends like you are one in a million!" },
        2: { emoji: "🤗", text: "With you, every moment is priceless!" },
        3: { emoji: "🍫", text: "Sweet like chocolate, our bond stays strong!" },  
        4: { emoji: "✨", text: "No words needed, you understand me!" },
        5: { emoji: "💥", text: "Forever grateful for a friend like you!" },
        6: { emoji: "🦋", text: "From your Titli" }
    };

    const days = Object.keys(gifts);
    const randomDay = days[Math.floor(Math.random() * days.length)];
    const { emoji, text } = gifts[randomDay];

    giftDiv.innerHTML = `<span>${emoji}</span><p>${text}</p>`;

    // Check if the song is already playing
    if (song.paused) {
        song.currentTime = 0; // Restart song only if it's not playing
        song.play();
    }
}

document.getElementById("cube").addEventListener("click", function () {
    this.classList.toggle("active");
    if (!this.classList.contains("active")) {
        changeGift();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    changeGift(); // Initialize a random gift

    const cube = document.getElementById("cube");
    cube.classList.add("active");
    setTimeout(() => {
        cube.classList.remove("active");
    }, 3000);
});
