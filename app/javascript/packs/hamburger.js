// window.onload=function(){

    const hamburgerMenu = document.querySelector('.menu-logo')
    
    hamburgerMenu.addEventListener('click', () =>{
        const menu = document.querySelector('.hamburger-inner');

        menu.classList.toggle('display-hidden')
    })

// }