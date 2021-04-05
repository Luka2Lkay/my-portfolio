const projectBtn = document.getElementById('projects_button');
const container = document.querySelector('main');


projectBtn.addEventListener('click', e =>{
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