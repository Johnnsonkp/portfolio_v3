// import {Application} from "stimulus"
// import ScrollTo from "stimulus-scroll-to"



// window.addEventListener("DOMContentLoaded", function() { 

    // const application = Application.start()
    // application.register("scroll-to", ScrollTo)

window.onload=function(){ 
    const home = document.querySelector(".home-li")
    const portfolio = document.querySelector(".portfolio")
    const about = document.querySelector(".about")
    const contact = document.querySelector(".contact")

    window.onscroll = function() {myFunction()};

    function myFunction() {
        
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
// });

