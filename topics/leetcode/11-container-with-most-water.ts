// O(n^2)
export function maxArea(height: number[]): number {

    let largestArea: number = 0

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {

            let minHeight = Math.min(height[i], height[j])
            let range = j - i
            // console.log(minHeight, "---", range)

            let multiple = minHeight * range

            if (multiple > largestArea) {
                largestArea = multiple
            }
            // console.log("===========================")

        }

    }

    return largestArea
}
