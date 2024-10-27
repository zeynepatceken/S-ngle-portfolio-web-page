document.querySelector('.feedback-form form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun normal gönderimini engelle
    const recommendation = this.recommendation.value;

    if (recommendation) {
        alert('Thank you for your recommendation!');
        this.reset(); // Formu sıfırla
    } else {
        alert('Please enter a recommendation before submitting.');
    }
});
