const inputElement = document.querySelector(".js-text-bar");
const paraElement = document.querySelector(".js-result-text");
function checkPalindrome () {
  let result = '';
  const reversedValue = inputElement.value.split('').reverse().join('');
  // Check if the original and reversed strings match
  if (inputElement.value === reversedValue) {
    result = 'This is a palindrome';
  } else {
    result = 'This is not a palindrome';
  }
  paraElement.innerHTML = `${result}`;
}