const products = [
    { name: 'Product 1', image: 's1.png' },
    { name: 'Product 2', image: 's2.png' },
    { name: 'Product 2', image: 's3.png' },
    { name: 'Product 2', image: 's4.png' },
    { name: 'Product 2', image: 's5.png' },
    { name: 'Product 2', image: 's6.png' },
    { name: 'Product 2', image: 's7.png' },
    { name: 'Product 2', image: 's8.webp' },
    { name: 'Product 2', image: 's9.webp' },
    { name: 'Product 2', image: 's10.webp' },
    // Add more product objects here...
  ];
  
  const cartItems = document.getElementById('cart-items');
  const productContainer = document.querySelector('.products');
  
  // Create product elements
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
  
    const imageElement = document.createElement('img');
    imageElement.src = product.image;
  
    const titleElement = document.createElement('h3');
    titleElement.textContent = product.name;
  
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.addEventListener('click', () => addToCart(product));
  
    productElement.appendChild(imageElement);
    productElement.appendChild(titleElement);
    productElement.appendChild(addButton);
  
    productContainer.appendChild(productElement);
  });
  
  function addToCart(product) {
    const cartItem = document.createElement('li');
    cartItem.textContent = product.name;
    cartItems.appendChild(cartItem);
  }
  