//tower of hanoi
export const towerOfHanoi = (n: number, source: string, helper: string, destination: string): void => {
    console.log("----------")
    if (n == 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`)
        return
    }

    towerOfHanoi(n - 1, source, destination, helper)
    console.log(`------rec1 Move disk ${n} from ${source} to ${helper}`);

    towerOfHanoi(n - 1, destination, helper, source)
    console.log(`------rec2 Move disk ${n} from ${destination} to ${source}`);
}

{/*
  * takes 4 argurments 2nd is source and the 4th is destination. do not
  * confuse when recursion cuz the pattern may change but the 2nd and 4th 
  * would be source & destination respectively. The 3rd is the helper through
  * which we got the required result. 
  *
  * 1st recursion fn - it calls n-1. --aim: to get the n-1(th) blocks to   
  * helper, so that the last remain block goes to the destination, and 
  * we can put all the helper's block to destination(not at a time) instead 
  * by process.
  *
*/}
