window.onload=function(){
 
    // Day and night button 
    const dayNightBtn = document.getElementById('day-night-btn')
    const navBar = document.getElementById('home-header')
    const navLinks  = document.querySelectorAll('.menu-li')
    const socialLinks  = document.querySelectorAll('.social-links')
    const logo = document.querySelector('.hero-text')
    const resume = document.querySelector('.resume-button')
    const projectHeader = document.querySelector('.header-text')
    const projectText = document.querySelector('.header-p')
    const projectsBody = document.getElementById('home-projects')
    const aboutPage = document.getElementById('home-about')
    const techBox = document.querySelector('.tech-stack')
    const aboutImage = document.querySelector('.about-me-img')
    const contactPage = document.querySelector('#home-contact')

    
    const arr = [logo, resume, projectHeader, projectText, aboutPage, contactPage]

    dayNightBtn.addEventListener('click', () =>{
        
        // for dark mode styling
        if(dayNightBtn.classList[0] == "light"){
            

            dayNightBtn.classList.remove('light')
            dayNightBtn.classList.add('dark')
            projectsBody.classList.add('background-light')
            aboutPage.classList.add('background-light-2')
            techBox.classList.add('background-light')
            aboutImage.classList.add('border-color');
            contactPage.classList.add('background-light')

            navBar.style.backgroundColor = 'white';
            arr.forEach((item) => {
                item.style.color = 'black'
            })
            navLinks.forEach((link) => {
                link.style.color = 'black'
            })
            socialLinks.forEach((link) => {
                link.style.color = 'black'
            })
        }
        // for light mode styling
        else if(dayNightBtn.classList[0] == "dark") {
            dayNightBtn.classList.remove('dark')
            dayNightBtn.classList.add('light')
            projectsBody.classList.remove('background-light')
            aboutPage.classList.remove('background-light-2')
            techBox.classList.remove('background-light')
            aboutImage.classList.remove('border-color');
            contactPage.classList.remove('background-light')

            navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            arr.forEach((item) => {
                item.style.color = '#fff'
            })
            navLinks.forEach((link) => {
                link.style.color = '#fff'
            })
            socialLinks.forEach((link) => {
                link.style.color = '#fff'
            })

        }
    })

// }


// window.onload=function(){ 
    const home = document.querySelector(".home-li")
    const portfolio = document.querySelector(".portfolio")
    const about = document.querySelector(".about")
    const contact = document.querySelector(".contact")

    window.onscroll = function() {myFunction()};

    function myFunction() {
        
        // alert('hello')
            // home.classList.add('current')
            // portfolio.classList.remove('current')
            // portfolio.classList.add('not-current')
        if (document.body.scrollTop < 600 || document.documentElement.scrollTop < 600) {
            home.classList.add('current')
            portfolio.classList.remove('current')
            portfolio.classList.add('not-current')
        }
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            home.classList.remove('current')
            portfolio.classList.remove('not-current')
            portfolio.classList.add('current')

            about.classList.remove('current')
            about.classList.add('non-current')
        }


        if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
            portfolio.classList.remove('current')
            portfolio.classList.add('not-current')
            about.classList.add('current')

            contact.classList.remove('current')
        }
        if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800){
            about.classList.remove('current')
            about.classList.add('not-current')
            contact.classList.add('current')
        }
    }
}