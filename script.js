const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(el => {
        const text = el.textContent.trim();
        const num = parseFloat(text) || 0;   // NaN → 0
        total += num;
    });

    const ansElement = document.getElementById("ans");
    if (ansElement) {
        ansElement.textContent = total;         
    } else {
        console.warn("Element #ans not found");
    }
};

getSumBtn.addEventListener("click", getSum);