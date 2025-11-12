// Объект с данными новеллы
const storyData = {
    start: {
        text: "Вы просыпаетесь в таинственной комнате. На столе лежит ключ и записка. Что вы сделаете?",
        choices: [
            { text: "Взять ключ", next: "takeKey" },
            { text: "Прочитать записку", next: "readNote" }
        ]
    },
    takeKey: {
        text: "Вы взяли ключ. Дверь за вами открылась. Выйти наружу?",
        choices: [
            { text: "Выйти", next: "exit" },
            { text: "Остаться и прочитать записку", next: "readNote" }
        ]
    },
    readNote: {
        text: "В записке написано: 'Иди на свет'. Вы видите свет из-под двери. Что делать?",
        choices: [
            { text: "Пойти к свету", next: "goToLight" },
            { text: "Остаться в комнате", next: "stay" }
        ]
    },
    exit: {
        text: "Вы вышли из комнаты и нашли выход! Поздравляем, вы выиграли!",
        choices: []
    },
    goToLight: {
        text: "Вы пошли к свету и нашли выход! Поздравляем, вы выиграли!",
        choices: []
    },
    stay: {
        text: "Вы остались в комнате. Свет погас, и вы остались в темноте навсегда. Игра окончена.",
        choices: []
    }
};

// Текущая сцена
let currentScene = "start";

// Функция для отображения сцены
function displayScene(sceneId) {
    const scene = storyData[sceneId];
    const storyTextElement = document.getElementById("story-text");
    const choicesElement = document.getElementById("choices");

    storyTextElement.textContent = scene.text;
    choicesElement.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.className = "choice-button";
        button.addEventListener("click", () => {
            currentScene = choice.next;
            displayScene(currentScene);
        });
        choicesElement.appendChild(button);
    });
}

// Запуск новеллы
displayScene(currentScene);
