var button = document.querySelector('.button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 670 });
});

// If we are on mobile, remove some showcase content
setInterval(() => {
    if (window.innerWidth > 720) {
        document.getElementById('optional').innerHTML = '<p>We promise to save our customers money and give them reliable craftsmanship</p>';
    } else {
        document.getElementById('optional').innerHTML = '';
    }
}, 300);