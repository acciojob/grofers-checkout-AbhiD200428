const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
getSumBtn.style.margin = "20px 0";
getSumBtn.style.padding = "10px 20px";
getSumBtn.style.fontSize = "16px";
getSumBtn.style.cursor = "pointer";
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceCells = document.querySelectorAll(".price");

    let total = 0;

    priceCells.forEach(cell => {
        const value = parseFloat(cell.textContent.trim());
        if (!isNaN(value)) {
            total += value;
        }
    });

    const oldTotalRow = document.querySelector("tr.total-row");
    if (oldTotalRow) {
        oldTotalRow.remove();
    }

    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    newRow.className = "total-row";

    const labelCell = document.createElement("td");
    labelCell.textContent = "Total";
    labelCell.style.fontWeight = "bold";

    const totalCell = document.createElement("td");
    totalCell.textContent = total;
    totalCell.style.fontWeight = "bold";
    totalCell.style.color = "#d32f2f"; 

    newRow.appendChild(labelCell);
    newRow.appendChild(totalCell);

    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);