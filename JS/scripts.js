document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('donation-form');
  const responseContainer = document.getElementById('form-response');
  const otherAmountInput = document.getElementById('otherAmountInput');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    responseContainer.textContent = '';

    const email = form.email.value;
    const donationRadio = form.donation.value;
    let donationAmount = donationRadio;

    if (donationRadio === 'Other') {
      const otherAmount = otherAmountInput.value;
      if (otherAmount && parseFloat(otherAmount) > 0) {
        donationAmount = `$${otherAmount}`;
      } else {
        responseContainer.textContent = 'Please enter a valid donation amount.';
        responseContainer.classList.add('text-danger');
        return;
      }
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          donation: donationAmount
        })
      });

      if (response.ok) {
        form.reset();
        responseContainer.textContent = 'Thank you for your pledge! We will contact you once we are ready to process your donation.';
        responseContainer.classList.remove('text-danger');
        responseContainer.classList.add('text-success');
      } else {
        responseContainer.textContent = 'Oops! There was a problem with your submission.';
        responseContainer.classList.add('text-danger');
      }
    } catch (error) {
      responseContainer.textContent = 'Oops! There was a problem with your submission.';
      responseContainer.classList.add('text-danger');
    }
  });

  // Toggle input field visibility for "Other" option
  const otherDonationInput = document.querySelector('input[name="donation"][value="Other"]');
  otherDonationInput.addEventListener('change', function () {
    if (this.checked) {
      otherAmountInput.classList.add('show');
    } else {
      otherAmountInput.classList.remove('show');
    }
  });

  // Course descriptions toggle functionality
  const courseTitles = document.querySelectorAll('.course-title');

  courseTitles.forEach(title => {
    title.addEventListener('click', function () {
      const description = this.nextElementSibling;

      // Close any open descriptions
      document.querySelectorAll('.course-description').forEach(desc => {
        if (desc !== description) {
          desc.style.display = 'none';
        }
      });

      // Toggle the clicked description
      if (description.style.display === 'block') {
        description.style.display = 'none';
      } else {
        description.style.display = 'block';
      }
    });
  });
});
