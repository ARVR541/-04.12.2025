//1
function concatenateStrings(str1, str2) {
  return (str1 + str2).replace(/ /g, '');
}

//2
function getStringLength(str) {
  return str.length;
}
//3
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
//4
function getChar(str, position) {
  return str[position - 1];
}
//5
function removeFirstOccurrences(str, substring) {
  return str.replace(substring, '');
}
//6
function getRectangleString(width, height) {
  let result = '';

  for (let i = 0; i < height; i++) {
    result += '*'.repeat(width) + '\n';
  }

  return result;
}
