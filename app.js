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

// -----------------------------------------------------------------------------

let array2 = [];
let Sub = document.querySelector("#submit");
Sub.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("Name").value;
  let age = document.getElementById("Age").value;
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: "",
      name: `${name}`,
      age: `${age}`,
    }),
  });
});

const card3 = document.getElementById("div4");

fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((data2) => {
    data2.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const name = document.createElement("h3");
      name.textContent = post.name;

      const age = document.createElement("p");
      age.textContent = post.age;

      card.appendChild(name);
      card.appendChild(age);

      card3.appendChild(card);
    });
  });
