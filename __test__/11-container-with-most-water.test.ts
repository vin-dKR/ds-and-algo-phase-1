import { maxArea } from "../topics/leetcode/11-container-with-most-water"
import assert from "node:assert/strict"

describe(maxArea, () => {
    const testCases = [
        { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
        { input: [1, 1], expected: 1 }
    ]

    testCases.forEach(({ input, expected }, index) => {
        assert.strictEqual(
            maxArea(input),
            expected,
            `Case ${index + 1} failed`
        )
    })
})
