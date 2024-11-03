// Function to get the query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fetch product data based on the product ID
function loadProductDetails() {
    const productId = getQueryParam('id');  // Get product ID from URL
    if (!productId) {
        alert('No product ID found.');
        return;
    }

    fetch('/NHTW/products.json')  // Path to your JSON file
        .then(response => response.json())
        .then(data => {
            const products = data.products;
            const product = products.find(p => p.id === productId);

            if (product) {
                // Populate the page with product details
                document.getElementById('product-image').src = product.image;
                document.getElementById('product-name').textContent = product.name;
                document.getElementById('product-description').textContent = product.description;
                document.getElementById('product-dimensions').textContent = product.dimensions;
                document.getElementById('product-category').textContent = product.category;
            } else {
                alert('Product not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
}

// Call the function on page load
window.onload = loadProductDetails;
