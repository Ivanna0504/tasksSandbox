import {
  convertToUppercase,
  calculateLetters,
  replaceNumbers,
  sortArray,
  buildStringUsingIndex,
  palindromeValidator
} from "./tasksWithStrings";

describe("should test tasksWithArrayMethods", () => {
  it("should test convertToUppercase", () => {
    const input = ["some string"];
    const output = ["SOME STRING"];

    expect(convertToUppercase(input)).toEqual(output);
  });

  it("should test calculateLetters", () => {
    const input = "should calculate 'a' letter";
    const output = 3;

    expect(calculateLetters(input, "a")).toEqual(output);
  });

  it("should test replaceNumbers", () => {
    const input = "should9run7and9replace0all1nums";
    const output = "should run and replace all nums";

    expect(replaceNumbers(input)).toEqual(output);
  });

  it("should test sortArray", () => {
    const input = [11, 2, 101, 3, 4, 5, 1, 6];
    const output = [1, 2, 3, 4, 5, 6, 11, 101];

    expect(sortArray(input)).toEqual(output);
  });

  it("should test buildStringUsingIndex", () => {
    const input = [
      "osmos",
      "uterque",
      "water",
      "crop",
      "&",
      "swap",
      "cat",
      "brew",
      "Esmeralda"
    ];
    const output = "star wars";

    expect(buildStringUsingIndex(input, 1)).toEqual(output);
  });

  it("should test palindromeValidator", () => {
    const input = "anna";
    const output = "The string is palindrome";

    expect(palindromeValidator(input)).toEqual(output);
  });

  it("should test palindromeValidator 2", () => {
    const input = "saippuakivikauppias";
    const output = "The string is palindrome";

    expect(palindromeValidator(input)).toEqual(output);
  });

  it("should test palindromeValidator, when false", () => {
    const input = "danna";
    const output = "The string is not palindrome";

    expect(palindromeValidator(input)).toEqual(output);
  });
});
