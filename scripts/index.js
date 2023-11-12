
var tabTitles = document.getElementsByClassName("tab-title")
var tabContents = document.getElementsByClassName("tab-content")



let skillsTabTitle = document.getElementById("skills-tab-title")
let experienceTabTitle = document.getElementById("experience-tab-title")
let hobbiesTabTitle = document.getElementById("hobbies-tab-title")

skillsTabTitle.addEventListener("click", function(event) { handleTabClick(event, 'skills') });
experienceTabTitle.addEventListener("click", function(event) { handleTabClick(event, 'experience') });
hobbiesTabTitle.addEventListener("click", function(event) { handleTabClick(event, 'hobbies') });

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





let openNavMenuButton = document.getElementById("open-nav-menu")
let closeNavMenuButton = document.getElementById("close-nav-menu")
let navMenu = document.getElementById("nav-menu")

openNavMenuButton.addEventListener("click", function(event) { openNavMenu(event) });
closeNavMenuButton.addEventListener("click", function(event) { closeNavMenu(event) });

function openNavMenu(event) {
  navMenu.style.right = "0";
}

function closeNavMenu(event) {
  navMenu.style.right = "-200px";
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




var video = document.getElementById("about-video")
video.addEventListener("dblclick", function(event) { handleVideoDoubleClick(event) })
video.removeAttribute("controls")


function handleVideoDoubleClick() {
  video.requestFullscreen()
}





let twitchRewards = document.getElementById("twitch-rewards")

twitchRewards.addEventListener("click", function(event) { testt(event) });

function testt() {
  window.location.href = 'projects/grass_conflicts.html'
}



let archivedImages = document.getElementsByClassName("archived")
for (archivedImage of archivedImages){
  let newImage = document.createElement("img")
  newImage.src = "images/portfolio_images/Archived.png"
  newImage.className = "project-tag"

  archivedImage.appendChild(newImage)
}

let githubImages = document.getElementsByClassName("github")
for (githubImage of githubImages){
  let newImage = document.createElement("img")
  newImage.src = "images/portfolio_images/Github.png"
  newImage.className = "project-tag"

  githubImage.appendChild(newImage)
}

let minigameImages = document.getElementsByClassName("minigame")
for (minigameImage of minigameImages){
  let newImage = document.createElement("img")
  newImage.src = "images/portfolio_images/Minigame.png"
  newImage.className = "project-tag"

  minigameImage.appendChild(newImage)
}

let toolImages = document.getElementsByClassName("tool")
for (toolImage of toolImages){
  let newImage = document.createElement("img")
  newImage.src = "images/portfolio_images/Tool.png"
  newImage.className = "project-tag"

  toolImage.appendChild(newImage)
}