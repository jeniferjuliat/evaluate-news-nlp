function checkForUrl(url) {
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
  const isValid = urlPattern.test(url);
  const errorMessage = isValid ? null : 'Invalid URL';
  return { isValid, errorMessage };
}

export { checkForUrl };
