import test from "node:test";
import { myAtoi } from "../topics/leetcode/8-string-to-integer-atoi";

describe(myAtoi, () => {
    const testCases = [
        { input: "42", expected: 42 },
        { input: "   -42", expected: -42 },
        { input: "4193 with words", expected: 4193 },
        { input: "words and 987", expected: 0 },
        { input: "-91283472332", expected: -2147483648 },
        { input: "21474836460", expected: 2147483647 },
        { input: "0-1", expected: 0 },
        { input: "+-12", expected: 0 },
        { input: "   +0 123", expected: 0 },
    ]

    testCases.forEach(({ input, expected }, index) => {
        test(`Case ${index + 1}: "${input}" --> ${expected}`, () => {
            expect(myAtoi(input)).toBe(expected)
        })
    })
})
