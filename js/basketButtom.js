document.addEventListener('DOMContentLoaded', () => {
    const basketItems = document.querySelectorAll('.basket-item'); 
    const totalPriceElement = document.getElementById('total-price'); 
    let totalPrice = 0; 

    basketItems.forEach(item => {
        const priceElement = item.querySelector('.item-price'); 
        const priceText = priceElement.textContent.replace('Ціна: ', '').replace(' грн', '').replace(' / 100 гр', ''); 
        const basePrice = parseFloat(priceText); 
        const isPerGram = priceElement.textContent.includes('/ 100 гр'); 
        const quantityInput = item.querySelector('.quantity'); 
        const minusButton = item.querySelector('.quantity-minus'); 
        const plusButton = item.querySelector('.quantity-plus'); 
        const removeButton = item.querySelector('.remove-item'); 

        let quantity = parseInt(quantityInput.value); 
        let currentPrice = basePrice * (isPerGram ? (quantity / 100) : quantity); 
        totalPrice += currentPrice; 
        updateTotalPrice(); 

        minusButton.addEventListener('click', () => {
            if (quantity > 1) { 
                quantity--; 
                quantityInput.value = quantity; 
                currentPrice = basePrice * (isPerGram ? (quantity / 100) : quantity); 
                priceElement.textContent = `Ціна: ${currentPrice.toFixed(2)} грн`; 
                totalPrice -= basePrice * (isPerGram ? 0.01 : 1); 
                updateTotalPrice(); 
            }
        });

        plusButton.addEventListener('click', () => {
            quantity++; 
            quantityInput.value = quantity;
            currentPrice = basePrice * (isPerGram ? (quantity / 100) : quantity); 
            priceElement.textContent = `Ціна: ${currentPrice.toFixed(2)} грн`; 
            totalPrice += basePrice * (isPerGram ? 0.01 : 1); 
            updateTotalPrice(); 
        });

        removeButton.addEventListener('click', () => {
            const itemTotalPrice = basePrice * (isPerGram ? (quantity / 100) : quantity); 
            totalPrice -= itemTotalPrice; 
            updateTotalPrice(); 
            item.remove(); 
        });
    });

    function updateTotalPrice() {
        totalPriceElement.textContent = `${totalPrice.toFixed(2)} грн`; 
    }
});
