// using the looping method
export function addBinaryInLoop(a: string, b: string) {
    let i = a.length - 1
    let j = b.length - 1

    console.log("lengths of the i and j", i, "-------", j)

    let carry = 0
    const result = []

    while (i >= 0 || j >= 0 || carry) {
        const bitA = i >= 0 ? Number(a[i]) : 0
        const bitB = j >= 0 ? Number(b[j]) : 0
        console.log("these are bits", bitA, "----------", bitB)
        console.log("-----SEPAROTOR----")

        const sum = bitA + bitB + carry
        console.log("----Sum", sum)

        result.push(sum % 2)
        carry = Math.floor(sum / 2)

        i--
        j--
    }

    return result.reverse().join("")
}

// using BigInt method
export function addBinaryInBigInt(a: string, b: string) {
    const sum = BigInt('0b' + a) + BigInt('0b' + b)
    return sum.toString(2)
}

// using BitWise and BigInt method
export function addBinaryInBitWise(a: string, b: string) {
    let x = BigInt('0b' + a)
    let y = BigInt('0b' + b)

    while (y !== 0n) {
        const carry = (x & y) << 1n

        x = x ^ y

        y = carry
    }

    return x
}

// using recursion method
export function addBinaryInRecursion(a: string, b: string): string {
    if (a.length === 0) return b;
    if (b.length === 0) return a;

    const lastA = a[a.length - 1];
    const lastB = b[b.length - 1];

    if (lastA === "0" && lastB === "0")
        return addBinaryInRecursion(a.slice(0, -1), b.slice(0, -1)) + "0";

    if (lastA === "1" && lastB === "1")
        return addBinaryInRecursion(addBinaryInRecursion(a.slice(0, -1), b.slice(0, -1)), "1") + "0";

    return addBinaryInRecursion(a.slice(0, -1), b.slice(0, -1)) + "1";
}

