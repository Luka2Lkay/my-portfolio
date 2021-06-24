const projectBtn = document.getElementById('projects_button');
const container = document.querySelector('main');
const burger = document.getElementById('burger_menu');
const navUl = document.querySelector('.nav_list');

burger.addEventListener('click', () =>{
    navUl.classList.toggle('show');
    burger.classList.toggle('change');
})

projectBtn.addEventListener('click', e => {
    if(container.style.display === 'block'){
        container.style.display = 'none';
    }else{
        container.style.display = 'block';
    }

    if(e.target.innerText === 'View My Projects'){
        e.target.innerText =  'Hide My Projects';
    }else{
        e.target.innerText = "View My Projects";
    }
})