const output = document.getElementById("output");
const input = document.getElementById("input");
const button = document.getElementById("button");
const optionsContainer = document.getElementById("options-value");
const optionsTitle = document.getElementById("options-title");
const optionsList = document.getElementById("options-list");


let selected = "";
optionsContainer.onpointerdown = (e) => {
    optionsList.classList.toggle("max-h-0");
    optionsList.classList.toggle("translate-y-1");

    const target = e.target.dataset.value;
    if (!target) return;

    optionsTitle.textContent = target;

    selected = target;

    output.textContent = generateUniqueCodes();
}


const uniqueCodes = {
    top: new Set(),
    bottom: new Set(),
    knitwear: new Set(),
};

button.onclick = () => {
    if (selected) {
        output.textContent = generateUniqueCodes();
    }
}

function getPrefix() {
    const map = {
        top: "TP",
        bottom: "B",
        knitwear: "KN"
    }
    return map[selected];
}

function generateUniqueCodes() {
    const prefix = getPrefix();
    const suffix = "";
    const length = 6 - (prefix.length + suffix.length);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";

    const set = uniqueCodes[selected];

    do {
        let randomPart = "";
        for (let i = 1; i <= length; i++) {
            randomPart += chars[Math.floor(Math.random() * chars.length)];
        }
        code = prefix.toUpperCase() + randomPart + suffix.toUpperCase();
    } while (set.has(code));

    set.add(code)
    return code;
}

