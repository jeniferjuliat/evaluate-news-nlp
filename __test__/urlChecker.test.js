const { checkForUrl } = require('../src/client/js/urlChecker');

test('checkForUrl should recognize a valid URL', () => {
  const url = 'https://www.google.com';
  const result = checkForUrl(url);
  expect(result.isValid).toBe(true);
  expect(result.errorMessage).toBeNull();
});

test('checkForUrl should recognize an invalid URL', () => {
  const url = 'invalid-url';
  const result = checkForUrl(url);
  expect(result.isValid).toBe(false);
  expect(result.errorMessage).toBeDefined();
});
