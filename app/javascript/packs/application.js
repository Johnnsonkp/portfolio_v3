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
    const socialLinks  = document.querySelectorAll('.fab')
    const logo = document.querySelector('.hero-text')
    const resume = document.querySelector('.resume-button')
    const allLinks = document.querySelectorAll('a')
    const projectHeader = document.querySelector('.header-text')
    const projectText = document.querySelector('.header-p')
    const projectsBody = document.getElementById('home-projects')
    // To refresh the javascript on the page each time a link is clicked 
    allLinks.forEach((link) => {
        link.addEventListener('click', () =>{
            window.location.reload()
        })
    })
    
    const arr = [logo, resume, projectHeader, projectText, ]

    dayNightBtn.addEventListener('click', () =>{
        
        // for dark mode styling
        if(dayNightBtn.classList[0] == "light"){
            
            dayNightBtn.classList.remove('light')
            dayNightBtn.classList.add('dark')
            projectsBody.classList.add('background-light')

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


}