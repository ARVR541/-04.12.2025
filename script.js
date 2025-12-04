//1
export const concatenateStrings = (str1, str2) => {
  let result = str1 + str2
  result = result.replace(/ /g, '')
  return result
}
//2
export const getStringLength = (str) => {
  return str.length
}
//3
export const getStringFromTemplate = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}!`
}
//4
export const getChar = (str, index) => {
  return str.charAt(index - 1)
}
//5
export const removeFirstOccurrences = (str, value) => {
  return str.replace(value, '')
}
//6
export function getRectangleString(width, height) {
  let result = '';

  for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
      result += '*'.repeat(width) + '\n'
    } else {
      result += '*' + ' '.repeat(width - 2) + '*' + '\n'
    }
  }

  return result
}