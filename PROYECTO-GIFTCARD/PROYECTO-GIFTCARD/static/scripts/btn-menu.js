let btnMenu = document.getElementById('btn-menu'),
    menu = document.getElementById('menu');

btnMenu.onclick = function() {
    menu.classList.toggle('active');
};