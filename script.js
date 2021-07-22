const burger = document.getElementById('burger_menu');
const navUl = document.querySelector('.nav_list');

burger.addEventListener('click', () =>{
    navUl.classList.toggle('show');
    burger.classList.toggle('change');
})