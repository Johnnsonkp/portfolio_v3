// window.onload=function(){

    const hamburgerMenu = document.querySelector('.menu-logo')
    
    // alert("hello")
    
    hamburgerMenu.addEventListener('click', () =>{
        const menu = document.querySelector('.hamburger-inner');

        // menu.classList.remove('display-hidden');
        // menu.classList.add('display-block');

        menu.classList.toggle('display-hidden')
    })

// }