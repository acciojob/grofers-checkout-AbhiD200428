const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceElements = document.querySelectorAll(".price, .prices");

    let total = 0;

    priceElements.forEach(element => {
        const priceText = element.textContent.trim();
        const priceValue = parseFloat(priceText.replace(/[^0-9.]/g, ''));

        if (!isNaN(priceValue)) {
            total += priceValue;
        }
    });

    const table = document.querySelector("table"); 
    if (!table) {
        console.warn("No table found in the document");
        return;
    }

    const existingTotalRow = document.querySelector(".total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    const totalRow = document.createElement("tr");
    totalRow.className = "total-row";
\
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; 
    totalCell.style.fontWeight = "bold";
    totalCell.style.backgroundColor = "#f0f0f0";
    totalCell.style.padding = "12px";
    totalCell.textContent = `Total Price: ₹${total.toFixed(2)}`;
    totalRow.appendChild(totalCell);

    const tbody = table.querySelector("tbody") || table;
    tbody.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

getSumBtn.addEventListener("click", getSum);

