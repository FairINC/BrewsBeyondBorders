document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newsletter-form');
  const responseContainer = document.getElementById('form-response');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    responseContainer.textContent = '';

    const email = form.email.value;
    if (!validateEmail(email)) {
      responseContainer.textContent = 'Please enter a valid email address.';
      responseContainer.classList.add('text-danger');
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      });

      if (response.ok) {
        form.reset();
        responseContainer.textContent = 'Thank you for signing up for our newsletter! We currently do not have this feature operational but we will add you to our first lists as soon as we have an emailer being sent out. Again, thank you!';
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

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
