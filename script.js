document.addEventListener('DOMContentLoaded', function() {
    
    const button = document.getElementById('clickButton');

    
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
});

const leafElement = document.querySelector('.leaf');

leafElement.style.color = 'white';
