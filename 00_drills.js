// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// Write a function which reverses the string
const reverse = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--)
  {
    res += str[i];
  }
  return (res);
}

// Write a function which returns the factorial of a positive integer
const factorial = (num) => {
  let res = 1;
  for (let i = 1; i <= num; i++)
  {
    res *= i;
  }
  return (res);
}

// Write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if (arr1.length != arr2.length)
  {
    return (-1);
  }
  let resArr = [];
  for (let i = 0; i < arr1.length; i++)
  {
    const t = [arr1[i], arr2[i]];
    resArr.push(t);
  }
  return (resArr);
}

// Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  let resArr1 = [];
  let resArr2 = [];
  for (let i = 0; i < arr.length; i++)
  {
    resArr1.push(arr[i][0]);
    resArr2.push(arr[i][1]);
  }
  return [resArr1, resArr2];
}

// Write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) => {
  let res = str + str;
  let pos = str.length - (num % str.length);
  return (res.substring(pos, pos + str.length));
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {
  const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let res = "Today's date is ";
  var today = new Date();
  res = res + months[today.getMonth()] + " " + today.getDate();
  let num = today.getDate().toString().substring(today.getDate().toString().length - 2);
  if (num === '11' || num === '12' || num === '13')
  {
    res += "th, ";
  } 
  else if (today.getDate().toString().substring(today.getDate().toString().length - 1) === '1')
  {
    res += "st, ";
  }
  else if (today.getDate().toString().substring(today.getDate().toString().length - 1) === '2')
  {
    res += "nd, ";
  } 
  else if (today.getDate().toString().substring(today.getDate().toString().length - 1) === '3')
  {
    res += "rd, ";
  } 
  else 
  {
    res += "th, ";
  }
  res += today.getFullYear() + ". It is " + (today.getHours() % 12) + ":" + today.getMinutes();
  if (today.getHours() < 12)
  {
    res += " in the morning.";
  } 
  else 
  {
    res += " in the afternoon.";
  }
  return (res);
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
