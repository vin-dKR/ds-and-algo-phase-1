

export const quickSort = (arr: number[], low: number = 0, high: number = arr.length - 1): number[] => {
    console.log(`Sorting range [${low}, ${high}]: [${arr.slice(low, high + 1)}]`);

    if (low < high) {
        // Partition and get pivot index
        const pivotIndex = partition(arr, low, high);
        console.log(`After partition, pivot at ${pivotIndex} = ${arr[pivotIndex]}, arr = [${arr}]`);

        // Recursively sort left and right subarrays
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    } else if (low === high) {
        console.log(`Single element at ${low}: ${arr[low]}`);
    }

    return arr;
};

const partition = (arr: number[], low: number, high: number): number => {
    console.log("INDIA -----------------------------PAKistan")
    const pivot = arr[high]; // Choose last element as pivot
    console.log(`  Partitioning with pivot = ${pivot}, range [${low}, ${high}]: [${arr.slice(low, high + 1)}]`);
    let i = low - 1; // Index of smaller element
    let comparisonCount = 0;
    let swapCount = 0;

    console.log("FOR_LOOP START ------------------------------------------")
    for (let j = low; j < high; j++) {
        comparisonCount++;
        console.log(`    Comparing arr[${j}] = ${arr[j]} <= pivot = ${pivot}`);
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
            swapCount++;
            console.log(`    Swapped arr[${i}] = ${arr[i]} with arr[${j}] = ${arr[j]}, arr = [${arr}]`);
        }
    }

    console.log("FOR_LOOP END -----------------------------------------");
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Place pivot
    swapCount++;
    console.log(`  Placed pivot ${pivot} at arr[${i + 1}], arr = [${arr}], Comparisons: ${comparisonCount}, Swaps: ${swapCount}`);
    console.log("INDA ================================ PAK")
    return i + 1; // Return pivot index
};

// Test
const numbers = [5, 2, 8, 1, 9];
console.log("Test Case:");
const result = quickSort(numbers);
console.log("Final sorted array (ascending):", result);
