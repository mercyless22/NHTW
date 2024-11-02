document.getElementById('subscribe-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email-input').value;
    if (emailInput) {
        alert(`Subscribed successfully with email: ${emailInput}`);
    } else {
        alert('Please enter a valid email address.');
    }
});
