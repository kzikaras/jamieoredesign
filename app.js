var button = document.querySelector('.button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 670 });
});