document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payment-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const inputs = form.querySelectorAll('input[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('invalid');
                isValid = false;
            } else {
                input.classList.remove('invalid');
            }
        });
        
        const cardNumber = document.getElementById('card-number');
        if (cardNumber.value.length !== 16) {
            cardNumber.classList.add('invalid');
            isValid = false;
        }
        
        const cardMonth = document.getElementById('card-month');
        const cardYear = document.getElementById('card-year');
        if (cardMonth.value.length !== 2 || cardYear.value.length !== 2) {
            cardMonth.classList.add('invalid');
            cardYear.classList.add('invalid');
            isValid = false;
        }
        
        const cardCvc = document.getElementById('card-cvc');
        if (cardCvc.value.length < 3 || cardCvc.value.length > 4) {
            cardCvc.classList.add('invalid');
            isValid = false;
        }
        
        if (isValid) {
            alert('Payment Successful!');
            form.reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });
    
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('invalid');
        });
    });
});