
const navbarItems = document.querySelectorAll('.navbar-item');


navbarItems.forEach(item => {
    item.addEventListener('click', function() {
        item.classList.toggle('active');
    });
});
