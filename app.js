class Crud {
  constructor(title, price, image) {
    this.title = title;
    this.price = price;
    this.image = image;
  }
}
async function fetchData() {
  const response = await fetch("https://fakestoreapi.com/products?limit=20");
  const data = await response.json();
  const card = data.map(
    (product) => new Crud(product.title, product.price, product.image)
  );
  return card;
}

async function render() {
  const product = await fetchData();
  product.map((product2) => {
    const card2 = document.createElement("div");
    card2.classList.add("card");
    card2.innerHTML = `
      <img src="${product2.image}" class="img2">
      <div>Title : ${product2.title}</div>
      <div>Price : ${product2.price}</div>      
    `;
    div2.appendChild(card2);
  });
}
render();
