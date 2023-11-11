
var tabTitles = document.getElementsByClassName("tab-title")
var tabContents = document.getElementsByClassName("tab-content")



let skillsTabTitle = document.getElementById("skills-tab-title")
let experienceTabTitle = document.getElementById("experience-tab-title")
let educationTabTitle = document.getElementById("education-tab-title")

skillsTabTitle.addEventListener("click", function(event) { handleTabClick(event, 'skills') });
experienceTabTitle.addEventListener("click", function(event) { handleTabClick(event, 'experience') });
educationTabTitle.addEventListener("click", function(event) { handleTabClick(event, 'education') });

function handleTabClick(event, tabName) {
  for (tabTitle of tabTitles) {
    tabTitle.classList.remove("active-tab")
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-tab")
  document.getElementById(tabName + '-tab-content').classList.add("active-tab")
}





let openSideMenuButton = document.getElementById("open-sidemenu")
let closeSideMenuButton = document.getElementById("close-sidemenu")
let sideMenu = document.getElementById("sidemenu")

openSideMenuButton.addEventListener("click", function(event) { openSideMenu(event) });
closeSideMenuButton.addEventListener("click", function(event) { closeSideMenu(event) });

function openSideMenu(event) {
  sideMenu.style.right = "0";
}

function closeSideMenu(event) {
  sideMenu.style.right = "-200px";
}




$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Calculate the distance to scroll
      var targetOffset = $(hash).offset().top;
      var currentOffset = $(window).scrollTop();
      var distance = Math.abs(targetOffset - currentOffset);

      var duration = distance;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: targetOffset
      }, duration, function(){
        // The animation function scrolls the page smoothly to the target element with the specified hash

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});