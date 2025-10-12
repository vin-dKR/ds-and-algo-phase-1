//tower of hanoi
export const towerOfHanoi = (n: number, source: string, helper: string, destination: string): void => {
    if (n === 1) {
        console.log(`Move disk ${n} from ${source} to ${destination}`);
        return;
    }

    // Move n-1 disks from source → helper
    towerOfHanoi(n - 1, source, destination, helper);

    // Move the nth disk from source → destination
    console.log(`Move disk ${n} from ${source} to ${destination}`);

    // Move n-1 disks from helper → destination
    towerOfHanoi(n - 1, helper, source, destination);
};


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
  *
*/}
