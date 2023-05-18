import { handleSubmit } from './js/formHandler'
import { checkForUrl } from './js/urlChecker'
import { updateUI } from './js/updateUI';

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service worker registered: ', registration);
      })
      .catch(registrationError => {
        console.log('Service worker registration failed: ', registrationError);
      });
  });
}

// Add event listener to the form element
document.getElementById('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const formText = document.getElementById('url').value;
  if (checkForUrl(formText)) {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: formText })
    });
    try {
      const data = await response.json();
      updateUI(data.irony, data.subjectivity, data.confidence);
    } catch (error) {
      console.log('Error:', error);
    }
  } else {
    alert('Please enter a valid URL.');
  }
});

