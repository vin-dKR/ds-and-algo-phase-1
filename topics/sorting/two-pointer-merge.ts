// **there are two ways to do it .. given below
// ONLY works if the initial arr are sorted for 1, not for 2
export function twoPointersMerger(nums1: number[], m: number, nums2: number[], n: number): void {
    console.log(`Starting merge: nums1 = [${nums1.slice(0, m)}|${nums1.slice(m)}], m = ${m}, nums2 = [${nums2}], n = ${n}`);

    let p1 = m - 1; // Pointer for nums1's last valid element
    let p2 = n - 1; // Pointer for nums2's last element
    let p = m + n - 1; // Pointer for nums1's last position
    let comparisonCount = 0;

    // Merge from end, placing larger elements for ascending order
    while (p2 >= 0 && p1 >= 0) {
        comparisonCount++;
        console.log(`Comparing nums1[${p1}] = ${nums1[p1]} with nums2[${p2}] = ${nums2[p2]}`);
        if (nums1[p1] > nums2[p2]) {
            console.log(`Placing nums1[${p1}] = ${nums1[p1]} at nums1[${p}]`);
            nums1[p] = nums1[p1];
            p1--;
        } else {
            console.log(`Placing nums2[${p2}] = ${nums2[p2]} at nums1[${p}]`);
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
        console.log(`Current nums1: [${nums1.slice(0, p + 1)}|${nums1.slice(p + 1)}]`);
    }

    // Copy remaining nums2 elements, if any
    while (p2 >= 0) {
        console.log(`Placing remaining nums2[${p2}] = ${nums2[p2]} at nums1[${p}]`);
        nums1[p] = nums2[p2];
        p2--;
        p--;
        console.log(`Current nums1: [${nums1.slice(0, p + 1)}|${nums1.slice(p + 1)}]`);
    }

    // No need for remaining nums1 elements (already in place)
    console.log(`Final nums1: [${nums1}], Comparisons: ${comparisonCount}`);
}

export function leetMergeUsingBuiltIn(nums1: number[], m: number, nums2: number[], n: number) {
    const arr = nums1.slice(0, m).concat(nums2)
    const sortedArr = arr.sort()

    for (let a in sortedArr) {
        nums1[a] = sortedArr[a]
    }

    return nums1
}
