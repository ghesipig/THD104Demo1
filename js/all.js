// -------------------------設定漢堡選單----------------------------------------
const hamburgerTag = document.querySelector('.showmenu');

hamburgerTag.addEventListener('click', function(event) {
    event.preventDefault();

    let menu = document.querySelector('ul.menu');

    menu.classList.toggle('menu-toggle');
});
