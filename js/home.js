const products = [
    {
      id: "1",
      name: "Iphone 16 pro max 256gb",
      price: "USD 1300.00",
      image: "../images/iphone.png",
      link: "../html/description.html?product=1",
      description: "iPhone 16 Pro Max with Super Retina XDR display and A18 Bionic chip.", // Added description
    },
    {
      id: "2",
      name: "Iphone 15 pro max",
      price: "USD 1100.00",
      image: "../images/iphone15.png",
      link: "../html/description.html?product=2",
      description: "iPhone 15 Pro Max with A17 Bionic chip and advanced camera system.", // Added description
    },
    {
      id: "3",
      name: "Airpods Pro 2",
      price: "EGP 299.00",
      image: "../images/airpods.png",
      link: "../html/description.html?product=3",
      description: "AirPods Pro (2nd generation) with Active Noise Cancellation.", // Added description
    },
    {
      id: "4",
      name: "Apple watch series 10 45mm",
      price: "EGP 299.00",
      image: "../images/applewatch.jpg",
      link: "../html/description.html?product=4",
      description: "Apple Watch Series 10 with advanced health monitoring features.", // Added description
    },
   
    
    
    {
      id : "7",
      name: "Samsung Ultra S24",
      price: "USD 1300.00",
      image: "../images/samsung.webp",
      link: "../html/description.html?product=7",
      description: "Apple Watch Series 10 with advanced health monitoring features.", // Added description
  
    },
    {
      id : "8",
      name: "Iphone 14 pro max",
      price: "USD 1000.00",
      image: "../images/iphone14.webp",
      link: "../html/description.html?product=8",
      description: "iPhone 15 Pro Max with A15 Bionic chip and advanced camera system.", // Added description
  
    },
    {
      id : "9",
      name: "Anker PowerBank 10000",
      price: "USD 30.00",
      image: "../images/anker-powercore-10000.png",
      link: "../html/description.html?product=9",
      description: "Anker PowerBank 10000mamp with 3 ports usb typ-c.", // Added description
  
    },
    
    
    {
      id : "13",
      name: "Airpods 2nd Generation",
      price: "USD 150.00",
      image: "../images/airpods2.png",
      link: "../html/description.html?product=13",      
      description: "Apple Watch Series 10 with advanced health monitoring features.", // Added description
  
    },
    
    
    {
      id : "16",
      name: "Samsung Ultra S23",
      price: "USD 1000.00",
      image: "../images/s23.webp",
      link: "../html/description.html?product=16",      
      description: "Apple Watch Series 10 with advanced health monitoring features.", // Added description
  
    },
    
    {
      id : "19",
      name: "Samsung Galaxy A55 Black",
      price: "USD 600.00",
      image: "../images/samsung a55.png",
      link: "../html/description.html?product=19",      
      description: "Apple Watch Series 10 with advanced health monitoring features.", // Added description
  
    }
    
  ];
  
  
  // Function to get the product ID from the URL query parameter
  function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("product"); // Returns the value of the "product" parameter (e.g., "1")
  }
  
  // Function to display product details
  function displayProductDetails() {
    const descDiv = document.getElementById("productDescription");
    const productId = getProductIdFromUrl();
  
    // Find the product with the matching ID
    const product = products.find((p) => p.id === productId);
  
    if (product) {
      // Create HTML structure for the product details
      const productHTML = `
        <div class="product">
          <div class="photo">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="details">
            <h2>${product.name}</h2>
            ${product.description ? `<p>${product.description}</p>` : ""} <!-- Handle missing description -->
            <h5>${product.price}</h5>
            <button type="submit" class="add-to-cart">Add to Cart</button>
          </div>
        </div>
      `;
  
      // Insert the product HTML into the desc div
      descDiv.innerHTML = productHTML;
  
      // Add event listener to the "Add to Cart" button
      const addToCartButton = document.querySelector(".add-to-cart");
      addToCartButton.addEventListener("click", () => {
        addToCart(product);
      });
    } else {
      // If the product is not found, display an error message
      descDiv.innerHTML = "<p>Product not found.</p>";
    }
  }
  /*
  // Function to handle "Add to Cart" button click
  function addToCart(product) {
    console.log(`${product.name} added to cart!`);
    // You can add logic to store the product in a cart array or send it to a backend
    // Example:
    // const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // cart.push(product);
    // localStorage.setItem("cart", JSON.stringify(cart));
  }
  */
  // Call the function to display product details when the page loads
  window.onload = displayProductDetails;
  const productContainer = document.getElementById('productContainer');


   // Get the search bar  elements
const searchBar = document.getElementById('searchBar');

// Function to display products
function displayProducts(productsToDisplay) {
  // Clear the container first
  productContainer.innerHTML = '';

  // Loop through each product and create the HTML structure dynamically
  productsToDisplay.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('oneProduct');

    const productLink = document.createElement('a');
    productLink.href = product.link;

    const productContent = document.createElement('div');
    
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productPrice = document.createElement('h4');
    productPrice.textContent = product.price;

    // Append elements in the correct order
    productContent.appendChild(productImage);
    productContent.appendChild(productName);
    productContent.appendChild(productPrice);
    productLink.appendChild(productContent);
    productDiv.appendChild(productLink);

    // Append the product to the container
    productContainer.appendChild(productDiv);
  });
}

// Function to filter products based on search input
function filterProducts() {
  const query = searchBar.value.toLowerCase(); // Get the search query and convert it to lowercase

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(query) ;
  });

  displayProducts(filteredProducts); // Display the filtered products
}

// Event listener to trigger the search when the user types
searchBar.addEventListener('input', filterProducts);

// Initially display all products
displayProducts(products);
