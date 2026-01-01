// FLOW: 1. it checks the 
export function LongestPalindromSubStr(s: string): string {
    let start = 0
    let maxLen = 0

    const expandFromCeter = (left: number, right: number): void => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            console.log("----------we are inside of while loop--------------")
            console.log("--left-", left, "-right--", right, "--letter-left-", s[left], "-letter-right--", s[right])
            console.log("----------we are off from while loop--------------")
            const currLen = right - left + 1

            if (currLen > maxLen) {
                maxLen = currLen
                start = left
            }

            console.log("the result", s.substring(start, start + maxLen))

            left--
            right++
        }
        console.log("--while LOOP ends here-- \n")
    }

    for (let i = 0; i < s.length; i++) {
        expandFromCeter(i, i)

        expandFromCeter(i, i + 1)
    }

    return s.substring(start, start + maxLen)
}
