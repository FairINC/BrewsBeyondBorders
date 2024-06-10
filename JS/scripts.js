document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", function() {
    navList.classList.toggle("fullscreen");
    navList.classList.toggle("active");
  });

  const courseTitles = document.querySelectorAll(".course-title");
  courseTitles.forEach((courseTitle) => {
    course
