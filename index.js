document.addEventListener("DOMContentLoaded", () => {
    const quizButtons = document.querySelectorAll(".quiz-btn");
    const result = document.getElementById("result");
    const heartsContainer = document.querySelector(".hearts");

    const popSound = new Audio("icon/pop.mp3");

    quizButtons.forEach(button => {
        button.addEventListener("click", () => {
            popSound.play();

            const loveLanguage = button.getAttribute("data-answer");

            let message = "";
            switch (loveLanguage) {
                case "words":
                    message = "💬 Your love language is Words of Affirmation! Kind words mean everything to you.";
                    break;
                case "time":
                    message = "⏳ Your love language is Quality Time! Being present with loved ones makes you feel special.";
                    break;
                case "gifts":
                    message = "🎁 Your love language is Receiving Gifts! Thoughtful presents show love and appreciation.";
                    break;
                case "touch":
                    message = "🤗 Your love language is Physical Touch! Hugs and cuddles make your heart happy.";
                    break;
                case "acts":
                    message = "🛠️ Your love language is Acts of Service! Helpful gestures speak louder than words.";
                    break;
            }

            result.innerHTML = message;
            result.classList.remove("hidden");
            result.classList.add("fade-in-bounce");

            setTimeout(() => result.classList.remove("fade-in-bounce"), 1000);

            result.style.opacity = "1";
            clearTimeout(result.fadeTimeout);
            result.fadeTimeout = setTimeout(() => {
                result.style.opacity = "0";
            }, 5000);
        });
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    setInterval(createHeart, 500);

    
});
