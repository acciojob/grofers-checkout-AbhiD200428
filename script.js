const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
const priceElements = document.querySelectorAll(".price");

  let total = 0;

  priceElements.forEach((price) => {
    total += parseFloat(price.textContent) || 0;
  });
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.colSpan = "2";
  newCell.id = "ans";
  newCell.textContent = total;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};
getSumBtn.addEventListener("click", getSum);