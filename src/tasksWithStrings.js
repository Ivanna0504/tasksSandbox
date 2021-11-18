// Tasks 1 -  convert array of strings
// from lowercase to uppercase
export function convertToUppercase(array) {
  const upperСasedArray = array.map((arrayItem) => arrayItem.toUpperCase());
  return upperСasedArray;
}

// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2
export function calculateLetters(string, letter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      count += 1;
    }
  }
  return count;
}

// Task 3 - replace numbers with spaces
// in the provided string
// 'I9like5JS' => 'I like JS'
export function replaceNumbers(string) {
  const regex = /[0-9]/g;
  const replaced = string.replace(regex, " ");
  return replaced;
}

// Task 4 - sort strings in array
export function sortArray(array) {
  const sortered = [...array];
  sortered.sort((str, next) => {
    if (str < next) {
      return -1;
    }
  });
  return sortered;
  //---------- or -------
  // const sortedStr = array.sort((str, next) => {
  //   if (str < next) {
  //     return -1;
  //   }
  // });
  // return sortedStr;
}

// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
// array - ["osmos", "uterque", "water", "crop",
//         "&", "swap", "cat", "brew", "Esmeralda"]
// index - 1
// result "start wars"
export function buildStringUsingIndex(array, index) {

    let newString= "";
  for (let i = 0; i < array.length; i++) {
  if (array[i].length > index) {
  newString+= array[i].charAt(index);
  } else {
  newString += " ";
  }
  }
  return newString
}
//-------------------------------------------------
//   let newString = array.map((indexItem) => {
//     return indexItem[index];
//   });
//   newString.join("");
//   return newString;
//-------------------------------------------------

// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
export function palindromeValidator(str) {
  let str1 = str.replace(/(^A-Z0-9)/gi, "").toLowerCase();
  let str2 = str1.split("").reverse().join("");
  if (str1 === str2) {
    return "The string is palindrome";
  }
  return "The string is not palindrome";
}
