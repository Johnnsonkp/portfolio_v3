// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


window.onload=function(){
    
    //Smooth Scroll
    const links = document.querySelectorAll("#home-projects #hamburger-menu ul a li");
 
    for (const link of links) {
    link.addEventListener("click", clickHandler);
    }
    
    function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
    }

    // Landing page Down arrow
    const scrollDown = document.querySelector('.down-arrow')

    scrollDown.addEventListener('click', () => {
        if (document.body.scrollTop < 100) {
            window.scrollBy(0, 750);
            
        }else{
            return "nothing"
        }
    })

    // Landing page Down arrow
    const projectsBtn = document.querySelector('.project-btn')

    projectsBtn.addEventListener('click', () => {
        if (document.body.scrollTop < 100) {
            window.scrollBy(0, 750);
        }else{
        return "nothing"
        }
    })

    
    // Day and night button 
    const dayNightBtn = document.getElementById('day-night-btn')
    const navBar = document.getElementById('home-header')
    const navLinks  = document.querySelectorAll('.menu-li')
    const socialLinks  = document.querySelectorAll('.social-links')
    const logo = document.querySelector('.hero-text')
    const resume = document.querySelector('.resume-button')
    const allLinks = document.querySelectorAll('a')
    const projectHeader = document.querySelector('.header-text')
    const projectText = document.querySelector('.header-p')
    const projectsBody = document.getElementById('home-projects')
    const aboutPage = document.getElementById('home-about')
    const techBox = document.querySelector('.tech-stack')
    const aboutImage = document.querySelector('.about-me-img')


    // To refresh the javascript on the page each time a link is clicked 
    allLinks.forEach((link) => {
        link.addEventListener('click', () =>{
            window.location.reload()
        })
    })
    
    const arr = [logo, resume, projectHeader, projectText, aboutPage]

    dayNightBtn.addEventListener('click', () =>{
        
        // for dark mode styling
        if(dayNightBtn.classList[0] == "light"){
            

            dayNightBtn.classList.remove('light')
            dayNightBtn.classList.add('dark')
            projectsBody.classList.add('background-light')
            aboutPage.classList.add('background-light-2')
            techBox.classList.add('background-light')
            aboutImage.classList.add('border-color');

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

    const home = document.querySelector(".home-li")
    const portfolio = document.querySelector(".portfolio")
    const about = document.querySelector(".about")

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
        }
        
        // if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {

        //     home.classList.remove('current')
        //     portfolio.classList.remove('not-current')
        //     home.classList.add('not-current')
        //     portfolio.classList.add('current')


        // } else if (document.body.scrollTop < 1000 || document.documentElement.scrollTop < 1000) {
        //     home.classList.remove('not-current')
        //     portfolio.classList.remove('current')
        //     portfolio.classList.add('not-current')
        //     home.classList.add('current')
        // }
        // if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {

        //     home.classList.remove('current')
        //     portfolio.classList.remove('current')
        //     home.classList.add('not-current')
        //     portfolio.classList.add('not-current')

        //     about.classList.remove('not-current')
        //     about.classList.add('current')

        // } else if (document.body.scrollTop < 1600 || document.documentElement.scrollTop < 1600) {

        //     // home.classList.remove('current')
        //     portfolio.classList.remove('not-current')
        //     home.classList.add('not-current')
        //     portfolio.classList.add('current')

        //     about.classList.remove('current')
        //     about.classList.add('not-current')

        // }
    }





}