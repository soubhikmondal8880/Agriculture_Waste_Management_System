document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');
    const cart = document.querySelector('.cart');
    const cartItems = document.querySelector('.cart-items');
    const checkoutButton = document.querySelector('.checkout-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const product = event.target.closest('.product');
        const productName = product.getAttribute('data-name');
        const productPrice = product.getAttribute('data-price');

        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - $${productPrice}`;
        cartItems.appendChild(cartItem);

        cart.classList.add('active');
    }

    checkoutButton.addEventListener('click', () => {
        alert('Proceeding to checkout...');
    });
});
