export const validParenthesis = (s: string): boolean => {
    const stack: string[] = [];
    const map: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            if (stack.length === 0) return false;
            const top = stack.pop();
            if (top !== map[ch]) return false;
        }
    }

    return stack.length === 0;
}
