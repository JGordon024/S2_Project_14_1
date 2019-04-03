"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Jacob Gordon
   Date:   04/02/19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
window.addEventListener("load", setStyles)

function setStyles() {
      var styleNum = randInt(5);
      var fancySheet = document.createElement("link")
      fancySheet.setAttribute("rel", "styleSheet");
      fancySheet.setAttribute("id", "fancySheet");
      fancySheet.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(fancySheet);
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild("figBox")

      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".css")
            sheetImg.setAttribute("src", "na_style_" + i + ".css")
            sheetImg.addEventListener(function () {
                  fancySheet.setAttribute("")

                  window.addEventListener("load", )
            })
      }
}

function randInt(size) {
      return Math.floor(size * Math.random());
}