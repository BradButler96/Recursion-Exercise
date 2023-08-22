/** product: calculate the product of an array of numbers. */

function product(nums, total = 1) {
  if (!nums.length) return total
  total *= nums.pop()
  return product(nums, total)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestWord = '') {
  if (!words.length) return longestWord.length
  const word = words.pop()
  if (word.length > longestWord.length) longestWord = word
  return longest(words, longestWord)
}

/** everyOther: return a string with e
 * very other letter. */

function everyOther(str, idx = 0, res = '') {
  if (idx >= str.length) return res
  res += str[idx]
  idx += 2
  return everyOther(str, idx, res)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  if (idx >= str.length - idx - 1) return true
  if (str[idx] !== str[str.length - idx - 1]) return false
  idx++
  return isPalindrome(str, idx)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx >= arr.length) return -1
  if (arr[idx] === val) return idx
  idx++
  return findIndex(arr, val, idx)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, res = '') {
  if (idx >= str.length) return res
  res += str[str.length - idx - 1]
  idx++
  return revString(str, idx, res)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const res = []
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "string") res.push(obj[key]);
    if (typeof obj[key] === "object") res.push(...gatherStrings(obj[key]));
  })
  return res
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (high <= low) return -1
  if (arr[high] === val) return high
  if (arr[low] === val) return low
  const midIdx = Math.floor((high + low) / 2)
  if (arr[midIdx] === val) return midIdx
  if (arr[midIdx] < val) return binarySearch(arr, val, midIdx + 1, high)
  if (arr[midIdx] > val) return  binarySearch(arr, val, low, midIdx)

  return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
