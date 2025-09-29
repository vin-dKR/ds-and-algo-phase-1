export const towerOfHanoi = (n: number, source: string, helper: string, destination: string): void => {
    if (n == 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`)
        return
    }

    towerOfHanoi(n - 1, source, destination, helper)
    console.log(`------Move disk ${n} from ${source} to ${destination}`);

    towerOfHanoi(n - 1, destination, helper, source)
}
