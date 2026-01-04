import { myAtoi } from "../topics/leetcode/8-string-to-integer-atoi";

console.log(myAtoi("1-1"));
// → 0  (Correct! Only reads '0', stops at '-')

console.log(myAtoi("00123"));
// → 123

console.log(myAtoi("-42"));
// → -42

console.log(myAtoi("   +42"));
// → 42

console.log(myAtoi("4193 with words"));
// → 4193

console.log(myAtoi("words 4193"));
// → 0

console.log(myAtoi("-91283472332"));
// → -2147483648 (clamped)
