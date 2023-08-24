// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("ApplySecretCode", () => {
  it("apply Secret Code to a string", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    expect(ApplySecretCode(secretCodeWord1)).toBe("L4ck4d41s1c4l")
    expect(ApplySecretCode(secretCodeWord2)).toBe("G0bbl3dyg00k")
    expect(ApplySecretCode(secretCodeWord3)).toBe("3cc3ntr1c")
  })
})

// Expected output: "L4ck4d41s1c4l"
// Expected output: "G0bbl3dyg00k"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// Pseudo code:

// create a fxn with input of string
// map over characters to their secret code placements
// initialize an empty str to store result
// loop through each char
// convert current char to lowercase
// if char has secret code placement add to result
// if not, add original char to result
// return final result

const ApplySecretCode = (inputString) => {
  const codeMap = { a: "4", e: "3", i: "1", o: "0" }
  let result = ""
  for (const char of inputString) {
    if (codeMap[char.toLowerCase()]) {
      result += codeMap[char.toLowerCase()]
    } else {
      result += char
    }
  }
  return result
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordFind", () => {
  it("finds a word in array from single letter in and returns the words with that letter", () => {
    const fruitArray = [
      "Mango",
      "Cherry",
      "Apricot",
      "Blueberry",
      "Peach",
      "Kiwi",
    ]

    const filterLetterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const filterLetterE = "e"

    expect(wordFind(fruitArray, filterLetterA)).toEqual([
      "Mango",
      "Apricot",
      "Peach",
    ])
    expect(wordFind(fruitArray, filterLetterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ])
  })
})

// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// Pseudo code:
// create HOF that takes an array and a char
// use .filter to iterate thru array with built in if
// char to lowercase
// use .includes with char
// return result

const wordFind = (array, letter) => {
  return array.filter((word) =>
    word.toLowerCase().includes(letter.toLowerCase())
  )
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

describe("fullHouse", () => {
  it("whether or not array is fullhouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    expect(fullHouse(hand1)).toEqual("true")
    expect(fullHouse(hand2)).toEqual("false")
    expect(fullHouse(hand3)).toEqual("false")
    expect(fullHouse(hand4)).toEqual("true")
  })
})
// a) Create a test with expect statements using the variable provided.

// b) Create the function that makes the test pass.
// pseudo:
// input: array of numbers (see above)
// output: array with 2 and 3 of a kind to equal full house (hand 1 and hand 4)

// process:
// sort the numbers
// index 0 and 1 and 2,3,4 OR 0,1,2 and 3,4  returns true
// if not returns false
// conditionals
// determine value in the array

const fullHouse = (array) => {
  let sortedArray = array.sort()
  if (
    (sortedArray[0] === sortedArray[1] &&
      sortedArray[2] === sortedArray[3] &&
      sortedArray[3] === sortedArray[4]) ||
    (sortedArray[0] === sortedArray[1] &&
      sortedArray[1] === sortedArray[2] &&
      sortedArray[3] === sortedArray[4])
  ) {
    return "true"
  } else {
    return "false"
  }
}

// Pseudo code:
