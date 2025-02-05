// Your products array (available for use if needed)
const products = [
  {
    id: "1",
    name: "Iphone 16 pro max 256gb",
    price: "USD 1300.00",
    image: "../images/iphone.png",
    link: "../html/description.html?product=1",
    description:
      "iPhone 16 Pro Max with Super Retina XDR display and A18 Bionic chip.",
    inCart: 0,
  },
  {
    id: "2",
    name: "Iphone 15 pro max",
    price: "USD 1100.00",
    image: "../images/iphone15.png",
    link: "../html/description.html?product=2",
    description:
      "iPhone 15 Pro Max with A17 Bionic chip and advanced camera system.",
    inCart: 0,
  },
  {
    id: "3",
    name: "Airpods Pro 2",
    price: "EGP 299.00",
    image: "../images/airpods.png",
    link: "../html/description.html?product=3",
    description: "AirPods Pro (2nd generation) with Active Noise Cancellation.",
    inCart: 0,
  },
  {
    id: "4",
    name: "Apple watch series 10 45mm",
    price: "EGP 299.00",
    image: "../images/applewatch.jpg",
    link: "../html/description.html?product=4",
    description:
      "Apple Watch Series 10 with advanced health monitoring features.",
    inCart: 0,
  },
  {
    id: "5",
    name: "Apple Watch Ultra 2",
    price: "USD 600.00",
    image: "../images/ultra2.jpg",
    link: "../html/description.html?product=5",
    description:
      "Apple Watch Ultra 2 with rugged design and long battery life.",
    inCart: 0,
  },
  {
    id: "6",
    name: "Huawei Watch Fit 3",
    price: "USD 299.00",
    image: "../images/huaweiwatch.jpg",
    link: "../html/description.html?product=6",
    description: "Huawei Watch Fit 3 with fitness tracking and AMOLED display.",
    inCart: 0,
  },
  {
    id: "7",
    name: "Samsung Ultra S24",
    price: "USD 1300.00",
    image: "../images/samsung.webp",
    link: "../html/description.html?product=7",
    description: "Samsung Galaxy S24 Ultra with advanced AI features.",
    inCart: 0,
  },
  {
    id: "8",
    name: "Iphone 14 pro max",
    price: "USD 1000.00",
    image: "../images/iphone14.webp",
    link: "../html/description.html?product=8",
    description:
      "iPhone 14 Pro Max with Dynamic Island and improved battery life.",
    inCart: 0,
  },
  {
    id: "9",
    name: "Anker PowerBank 10000",
    price: "USD 30.00",
    image: "../images/anker-powercore-10000.png",
    link: "../html/description.html?product=9",
    description:
      "Anker PowerCore 10000mAh power bank for fast charging on the go.",
    inCart: 0,
  },
  {
    id: "10",
    name: "JBL Party Box 200",
    price: "USD 250.00",
    image: "../images/jbl.webp",
    link: "../html/description.html?product=10",
    description: "JBL Party Box 200 with powerful bass and LED light effects.",
    inCart: 0,
  },
  {
    id: "11",
    name: "Spigen Samsung Ultra 23 Phone case",
    price: "USD 100.00",
    image: "../images/spigen.avif",
    link: "../html/description.html?product=11",
    description:
      "Spigen phone case for Samsung Ultra 23 with shockproof protection.",
    inCart: 0,
  },
  {
    id: "12",
    name: "Asus Gaming Laptop",
    price: "USD 2000.00",
    image: "../images/laptop.webp",
    link: "../html/description.html?product=12",
    description: "Asus high-performance gaming laptop with RTX graphics.",
    inCart: 0,
  },
  {
    id: "13",
    name: "Airpods 2nd Generation",
    price: "USD 150.00",
    image: "../images/airpods2.png",
    link: "../html/description.html?product=13",
    description:
      "Apple AirPods (2nd Gen) with seamless Bluetooth connectivity.",
    inCart: 0,
  },
  {
    id: "14",
    name: "Airpods 3rd Generation",
    price: "USD 200.00",
    image: "../images/airpods3.jpg",
    link: "../html/description.html?product=14",
    description: "Apple AirPods (3rd Gen) with Spatial Audio and MagSafe case.",
    inCart: 0,
  },
  {
    id: "15",
    name: "Apple Watch Series 9 45mm",
    price: "USD 420.00",
    image: "../images/applewatch9.jpg",
    link: "../html/description.html?product=15",
    description: "Apple Watch Series 9 with advanced health tracking.",
    inCart: 0,
  },
  {
    id: "16",
    name: "Samsung Ultra S23",
    price: "USD 1000.00",
    image: "../images/s23.webp",
    link: "../html/description.html?product=16",
    description: "Samsung Galaxy S23 Ultra with top-tier camera system.",
    inCart: 0,
  },
  {
    id: "17",
    name: "Lenovo IdeaPad 14",
    price: "USD 900.00",
    image: "../images/ideapad3.webp",
    link: "../html/description.html?product=17",
    description: "Lenovo IdeaPad 14 for productivity and entertainment.",
    inCart: 0,
  },
  {
    id: "18",
    name: "Spigen case for iphone 13",
    price: "USD 20.00",
    image: "../images/spigen13.png",
    link: "../html/description.html?product=18",
    description: "Spigen shockproof case for iPhone 13.",
    inCart: 0,
  },
  {
    id: "19",
    name: "Samsung Galaxy A55 Black",
    price: "USD 600.00",
    image: "../images/samsung a55.png",
    link: "../html/description.html?product=19",
    description: "Samsung Galaxy A55 with long-lasting battery life.",
    inCart: 0,
  },
  {
    id: "20",
    name: "JBL Party Box 710",
    price: "USD 500.00",
    image: "../images/party710.jpg",
    link: "../html/description.html?product=20",
    description: "JBL Party Box 710 for immersive music experiences.",
    inCart: 0,
  },
  {
    id: "21",
    name: "SoundCore Anker Rave Speaker",
    price: "USD 100.00",
    image: "../images/rave.webp",
    link: "../html/description.html?product=21",
    description: "Anker Rave Speaker with 24-hour battery life.",
    inCart: 0,
  },
  {
    id: "22",
    name: "SoundCore Anker Flare 2",
    price: "USD 200.00",
    image: "../images/flare2.webp",
    link: "../html/description.html?product=22",
    description: "Anker Flare 2 with customizable LED light show.",
    inCart: 0,
  },
  {
    id: "23",
    name: "Anker Soundcore Life Q23",
    price: "USD 80.00",
    image: "../images/lifeq23.png",
    link: "../html/description.html?product=23",
    description: "Anker Soundcore Life Q23 with hybrid noise cancellation.",
    inCart: 0,
  },
  {
    id: "24",
    name: "Anker Soundcore Liberty",
    price: "USD 50.00",
    image: "../images/liberty.jpg",
    link: "/html/description.html?product=24",
    description: "Anker Soundcore Liberty wireless earbuds with deep bass.",
    inCart: 0,
  },
];

function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("product");
}

// Function to display items in the cart
function displayCart() {
  const cartDiv = document.getElementById("cart");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartDiv.innerHTML = "";

  if (cartItems.length === 0) {
    cartDiv.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    document.getElementById("total").textContent = "Total: USD 0.00";
    return;
  }

  let total = 0;
  cartItems.forEach((item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d.-]/g, ""));
    total += numericPrice * item.inCart;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    // Product Image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    // Details Section
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("item-details");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Price: ${item.price}`;

    const quantityPara = document.createElement("p");
    quantityPara.textContent = `Quantity: ${item.inCart}`;

    detailsDiv.appendChild(title);
    detailsDiv.appendChild(pricePara);
    detailsDiv.appendChild(quantityPara);

    // Actions Section
    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("item-actions");

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeFromCart(item.id);

    actionsDiv.appendChild(removeBtn);

    itemDiv.appendChild(img);
    itemDiv.appendChild(detailsDiv);
    itemDiv.appendChild(actionsDiv);

    cartDiv.appendChild(itemDiv);
  });

  document.getElementById("total").textContent = `Total: USD ${total.toFixed(
    2
  )}`;
}

// Function to remove an item from the cart
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

// Function to update the cart count (if you show it elsewhere)
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

window.onload = displayCart;
