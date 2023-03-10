// Grouping of an Anagram
// const input = findGroupsOfAnagram(["bag", "gab", "foo", "abg", "oof", "ofo"]);

// // Output
// [
//   ["bag", "gab", "abg"],
//   ["foo", "oof", "ofo"],
// ];

let arr = ["bag", "gab", "foo", "abg", "oof", "ofo"];

console.log(checkAnagram(arr));

// function checkAnagram(inp) {
//   let res = [];

//   for (let i = 0; i < inp.length; i++) {
//     res.push([inp[i]]);
//     let arr1 = inp[i].split("").sort().join("");

//     for (let j = i + 1; j < inp.length; j++) {
//       let arr2 = inp[j].split("").sort().join("");

//       if (arr1 === arr2) {
//         res[i].push(inp[j]);
//         inp.splice(j,1)
//         j=j-1
//       }
//     }
//   }
//   return res
// }

function checkAnagram(arr) {
  let res = [];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let temp1 = [arr[i]];
    let str1 = arr[i].split("").sort().join("");
    if (obj.hasOwnProperty(str1)) {
      continue;
    }
    obj[str1] = true;

    for (let j = i + 1; j < arr.length; j++) {
      let str2 = arr[j].split("").sort().join("");
      if (str2 === str1) {
        temp1.push(arr[j]);
      }
    }
    res.push(temp1);
  }
  return res;
}
