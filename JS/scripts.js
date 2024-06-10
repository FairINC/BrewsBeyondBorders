document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", function() {
    navList.classList.toggle("active");
  });

  const courseTitles = document.querySelectorAll(".course-title");
  courseTitles.forEach((courseTitle) => {
    courseTitle.addEventListener("click", function() {
      const courseDescription = this.nextElementSibling;
      courseDescription.classList.toggle("show-description");
    });
  });

  const otherAmountRadio = document.querySelector('input[name="donation"][value="Other"]');
  const otherAmountInput = document.getElementById("otherAmountInput");

  otherAmountRadio.addEventListener("click", function() {
    otherAmountInput.classList.toggle("collapse");
  });

  const donationForm = document.getElementById("donation-form");
  const formResponse = document.getElementById("form-response");

  donationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(donationForm);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", donationForm.action, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          formResponse.textContent = "Thank you for your donation!";
          donationForm.reset();
        } else {
          formResponse.textContent = "Oops! There was a problem with your submission.";
        }
      }
    };
    xhr.send(formData);
  });

  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterResponse = document.getElementById("newsletter-response");

  newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(newsletterForm);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", newsletterForm.action, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          newsletterResponse.textContent = "Thank you for subscribing!";
          newsletterForm.reset();
        } else {
          newsletterResponse.textContent = "Oops! There was a problem with your submission.";
        }
      }
    };
    xhr.send(formData);
  });
});
