import { updateUI } from './updateUI';
import { checkForUrl } from './urlChecker';

// Set the API URL
let url = 'http://localhost:8081/api';

async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("url").value;

  // check if the input is a valid URL
  if (checkForUrl(formText)) {


    // send the input to the server for analysis
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: formText })
    });
    try {
      const data = await response.json();
      console.log('Data received:', data);
      updateUI(data.irony, data.subjectivity, data.confidence);

    } catch (error) {
      console.log('Error:', error);
    }
  } 
    // display an error message in the UI
    document.getElementById("irony").innerHTML = "Please enter a valid URL";
    document.getElementById("subjectivity").innerHTML = "";
    document.getElementById("confidence").innerHTML = "";
  }


export { handleSubmit }
