function updateUI(irony, subjectivity, confidence) {
  document.getElementById('irony').innerHTML = `Irony: ${irony.charAt(0).toUpperCase() + irony.slice(1).toLowerCase()}`;
document.getElementById('subjectivity').innerHTML = `Subjectivity: ${subjectivity.charAt(0).toUpperCase() + subjectivity.slice(1).toLowerCase()}`;
  document.getElementById('confidence').innerHTML = `Confidence: ${confidence}%`;
}

export { updateUI };
