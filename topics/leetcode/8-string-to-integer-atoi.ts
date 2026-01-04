export const myAtoi = (s: string) => {
    const cleanedStr = s.split("").filter(a => a !== " ").join("")

    let sign = 1
    const arr = []

    for (let i = 0; i < s.length; i++) {
        if (cleanedStr[i] === "-") {
            if (arr.length > 0) {
                return arr.join("")
            } else {
                sign = -1
            }
        } else if (!isNaN(Number(cleanedStr[i]))) {
            arr.push(cleanedStr[i])
        } else {
            return 0
        }
    }

    let num = Number(arr.join(""))
    if (num > 2 ** 31 - 1) {
        num = 2 ** 31 - 1
    } else if (num < -(2 ** 31)) {
        num = -(2 ** 31)
    }

    const result = Number(num) * sign
    return result
}
