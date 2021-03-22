// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


// import {Application} from "stimulus"
// import ScrollTo from "stimulus-scroll-to"
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
// require('src/form')
// require('src/hamburger')
require('src/nav')
// require('src/smooth')
// require('src/dayNight')




Rails.start()
Turbolinks.start()
ActiveStorage.start()


window.onload=function(){ 
    alert("it works")
}
