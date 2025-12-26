let total = 0;

function addProduct() {
  const product = document.getElementById("product");
  const price = Number(product.value);

  total += price;
  document.getElementById("total").innerText = total;
}
