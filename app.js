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
      card.innerHTML = `
      <p>Name : ${post.name}</p>
      <p>Age : ${post.age}</p>
      <div class="div5">
        <button class="button" id="${post.id}" onclick="update1">Update</button>
        <button class="button" id="${post.id}" onclick="delete1">Delete</button>
        </div>`;
      card3.appendChild(card);
    });
  });

function updatepost(button) {
  const postid = button.getAttribute("id");
  const newpost = prompt("update the new data :", "");

  if (newpost !== null) {
    fetch(`http://localhost:3000/posts/${postid}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: newpost }),
    }).then(() => {
      fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((data2) => {
          data2.forEach((post) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
      <p>Name : ${post.name}</p>
      <p>Age : ${post.age}</p>
      <div class="div5">
        <button class="button" id="${post.id}" onclick="update1">Update</button>
        <button class="button" id="${post.id}" onclick="delete1">Delete</button>
        </div>`;
            card3.appendChild(card);
          });
        });
    });
  }
}

function delete1(button) {
  const postid = button.getAttribute("id");
  fetch(`http://localhost:3000/posts/${postid}`, { method: "DELETE" }).then(
    () => {
      fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((data2) => {
          data2.forEach((post) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
      <p>Name : ${post.name}</p>
      <p>Age : ${post.age}</p>
      <div class="div5">
        <button class="button" id="${post.id}" onclick="update1">Update</button>
        <button class="button" id="${post.id}" onclick="delete1">Delete</button>
        </div>`;
            card3.appendChild(card);
          });
        });
    }
  );
}
