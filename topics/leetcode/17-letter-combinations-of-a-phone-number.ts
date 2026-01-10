export  function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    const map: Record<string, string> = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result: string[] = [];

    function backtrack(index: number, path: string) {
        if (index === digits.length) {
            result.push(path);
            return;
        }

        for (const ch of map[digits[index]]) {
            backtrack(index + 1, path + ch);
        }
    }

    backtrack(0, "");
    return result;
}

