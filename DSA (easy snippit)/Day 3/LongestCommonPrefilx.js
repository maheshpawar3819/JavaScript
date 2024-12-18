/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

let words = ["clumsy", "clutch", "club", "cluster", "clue"];

function LongestCommonPrefix(words) {
  if (!words.length) return "";

  for (let i = 0; i <= words[0].length; i++) {
    for (let j = 1; j < words.length; j++) {
      if (words[0][i] !== words[j][i]) {
        return words[0].slice(0, i);
      }
    }
  }
  return words[0];k
}

console.log(LongestCommonPrefix(words));
