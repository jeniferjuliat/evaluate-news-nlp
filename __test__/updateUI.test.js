const { updateUI } = require('../src/client/js/updateUI');

  test('should update UI correctly', () => {
    document.body.innerHTML = `
      <div id="irony"></div>
      <div id="subjectivity"></div>
      <div id="confidence"></div>
    `;
    const irony = 'ironic';
    const subjectivity = 'subjective';
    const confidence = '100';
    updateUI(irony, subjectivity, confidence);
    expect(document.getElementById('irony').innerHTML).toBe('Irony: Ironic');
    expect(document.getElementById('subjectivity').innerHTML).toBe('Subjectivity: Subjective');
    expect(document.getElementById('confidence').innerHTML).toBe('Confidence: 100%');
  });