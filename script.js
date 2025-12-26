let total = 0;

function addSale() {
  const price = document.getElementById("price").value;
  total += Number(price);
  document.getElementById("total").innerText = total;
  document.getElementById("price").value = "";
}
