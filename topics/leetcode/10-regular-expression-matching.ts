//WIP: take new cases
export function isMatch(s: string, p: string): boolean {
    const map = new Map<string, boolean>()

    const dp = (i: number, j: number): boolean => {
        if (j === p.length) return i === s.length

        const key = `${i},${j}`
        if (map.has(key)) return map.get(key)!

        const firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.')

        let result: boolean

        if (j + 1 < p.length && p[j + 1] === "*") {
            result = dp(i, j + 2) || (firstMatch && dp(i + 1, j))
        } else {
            result = firstMatch && dp(i + 1, j + 1)
        }

        map.set(key, result)
        return result
    }

    return dp(0, 0)
};
