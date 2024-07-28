import { getCookie } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";
import { shortenText } from "./utils/stringFunc.js";

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");
const mainContent = document.getElementById("products");

const showProducts = (products) => {
  mainContent.innerHTML = "";

  products.forEach((product) => {
    const JSX = `
    <div>
      <img src=${product.image} alt=${product.title} />
      <h4>${shortenText(product.title)}</h4>
      <div id="price">
        <p>$ ${product.price}</p>
        <button>
          Buy
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
      <div id="rate">
        <i class="fa-solid fa-star"></i>
        <span>${product.rating.rate}</span>
      </div>
      <div id="count">
        <i class="fa-solid fa-user"></i>
        <span>${product.rating.count}</span>
      </div>
    </div>
  `;

    mainContent.innerHTML += JSX;
  });
};

const init = async () => {
  const cookie = getCookie();

  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashboardButton.style.display = "none";
  }

  const allProducts = await getData("products");
  showProducts(allProducts);
  console.log(allProducts);
};

document.addEventListener("DOMContentLoaded", init);
