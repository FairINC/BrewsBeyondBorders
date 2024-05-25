document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('donation-form');
  const responseContainer = document.getElementById('form-response');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    responseContainer.textContent = '';

    const email = form.email.value;
    const donationRadio = form.donation.value;
    let donationAmount = donationRadio;

    if (donationRadio === 'Other') {
      const otherAmount = form.otherAmount.value;
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
});
