document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    fetch('http://127.0.0.1:8000/api/products/')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';

                const productName = document.createElement('h2');
                productName.textContent = product.name;

                const productPrice = document.createElement('p');
                productPrice.textContent = `$${product.price}`;

                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.name;

                productDiv.appendChild(productName);
                productDiv.appendChild(productPrice);
                productDiv.appendChild(productImage);

                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
