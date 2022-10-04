const switchElement = document.querySelector('.switch');
let mapImg = document.querySelector('#map-img');
let githubImg = document.querySelector('#github-img');
let linkedImg = document.querySelector('#linkedin-img');
let gitImg = document.querySelector('#git-img');
let tastyImg = document.querySelector('#tasty-img');
let adminImg = document.querySelector('#admin-img');



let toggle = true;

switchElement.addEventListener('click', () =>{
    //toggles dark mode
    document.body.classList.toggle('dark');

    //toggles imgs 
    toggle = !toggle;
    if(toggle){
        mapImg.src = 'imgs/map.png';
        githubImg.src = 'imgs/github.png';
        linkedImg.src = 'imgs/linkedin.png';
        gitImg.src = 'imgs/git.png';
        adminImg.src = 'imgs/admin_dark.png';
        tastyImg.src = 'imgs/tasty.png';

    }else{
        mapImg.src = 'imgs/map_dark.png';
        githubImg.src = 'imgs/github_white.png';
        linkedImg.src = 'imgs/linkedin_white.png';
        gitImg.src = 'imgs/git_white.png';
        //adminImg.src = 'imgs/admin_white.png';
        //tastyImg.src = 'imgs/tasty_white.png';

    }
        
})



