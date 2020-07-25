/***
 *
 * ERROR HANDLING WITH TRY CATCH
 */

// const user = { email: "jdoe@gmail.com" };

// try {
//   // Produce a Reference Error
//   // myFunction();

//   // Produce a type error
//   // null.myFunction();

//   // Produce syntax error
//   // eval("hello World");

//   // Will produce a URIError
//   // decodeURIComponent("%");

//   if (!user.name) {
//     // throw "User has no name";
//     throw new SyntaxError("User has no name");
//   }
// } catch (e) {
//   // console.log(`${e.name} its Null dummy`);
//   console.log(`User Error: ${e.message}`);
//   // console.log(e.message);
//   // console.log(e.name);
//   // console.log(e instanceof ReferenceError);
//   // console.log(e instanceof TypeError);
// } finally {
//   // console.log("Finally runs regardless of result");
// }
// // try catch will allow the script to continue

// // console.log(" Program Continues");

/****
 *
 *
 * REGULAR EXPRESSIONS
 *
 * *****
 */

// let re;

// re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// exec() - Will return result in an array or null

// const result = re.exec("hello world");

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - returns true or false
// const result = re.test("Hello");
// console.log(result);

// match() - REturn result array or null
// const str = "Hello There";
// const result = str.match(re);
// console.log(result);

// search() - Returns index of teh first match if not found returns -1
// const str = "Hello There";
// const result = str.search(re);
// console.log(result);

// replace() - Returns new string with some or all matches of a pattern
// const str = "Hello There";
// const newStr = str.replace(re, "hi");
// console.log(newStr);

/****
 *
 *
 * Metacharacter Symbols
 */

let re;
// Literal Characters
re = /hello/; // Does not match because case sensitive
re = /hello/i; // Matches because it us not case sensitive

// Metacharacter Symbols
re = /^h/i; // Must start with ^
re = /world$/i; // Must ends with $
re = /^hello$/i; // Must begin and end with
re = /^h.llo$/i; // Matches any one character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional Character
re = /gre?a?y\?/i; // Escap Character
// string to match
const str = "Hello x";

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or an e
re = /[GF]ray/i; // Must be a G or F
re = /[^GF]ray\?/i; // Match anything but a g or f
// If the up arrow is in the brackets it means that it is not the characters in the brackets.
// If the up arrow is outside the brakets ^[GF] It means it must start with the characters in the brackets
re = /[A-Z]ray/; // Matches any uppercase letter
re = /[a-z]ray/; // Matches any lowercase number
re = /[A-Za-z]ray/; // Matches any letter
re = /[0-9]ray/; // Matches any digit

// Braces {} - Quantifiers
re = /Hello/;
re = /hel{2}o/i; // The preceeding number has to occur {m} number of times
re = /hel{2,4}o/i; // The preceeding number has to occur between 2-4 number of times
re = /hel{2,}o/i; // The preceeding number has to occur atleast {m} number of times

// Parentheses () -Grouping
re = /([0-9]x){3}/; // Parentheses group the number and the x together so the whole things has to happen 3 times

// Shorthand Character Classes
re = /\w/; // Word Character -alphanumeric or _
re = /\w/; // Word Character -alphanumeric or _
re = /\w+/; // + = one or more, in this case words
re = /\W/; // Non word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any non digit
re = /\s/; // Matches whitespace characters matches spaces or tabs
re = /\S/; // Matches non-whitespace character
re = /Hell\b/i; //Word boundary will return the word hell but not hello

// Assertions
re = /x(?=y)/; // Match x only if it is followed by y
re = /x(?!y)/; // Match x only if it is not followed by y

// Log results
const result = re.exec(str);
// console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
