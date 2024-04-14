const income = document.querySelector(".income-input");
const results = document.querySelector(".results-input");
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");
const from = document.querySelector("form");

reset.addEventListener('click', () => {
    setTimeout(() => {
        document.location.reload();
    });
});

const numRounded = () => {
    (Math.round(results.value * 100) / 100).toFixed(2);
};

calculate.addEventListener("click", (e) => {
    e.preventDefault;

    if (income.value <= 12000) {
        results.value = income.value * 0.15;
    } else if (income.value > 12000 && income.value < 100000) {
        results.value = income.value * 0.20;
    } else if (income.value > 100000 && income.value < 150000) {
        results.value = income.value * 0.26;
    } else if (income.value > 160000 && income.value < 200000) {
        results.value = income.value * 0.29;
    } else if (income.value >= 220000) {
        results.value = income.value * 0.33;
    }
    numRounded();
});


