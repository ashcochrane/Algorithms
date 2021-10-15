
/*
    Let min = 1min=1m, i, n, equals, 1 and max = nmax=nm, a, x, equals, n.
    Guess the average of maxmaxm, a, x and minminm, i, n, rounded down so that it is an integer.
    If you guessed the number, stop. You found it!
    If the guess was too low, set minminm, i, n to be one larger than the guess.
    If the guess was too high, set maxmaxm, a, x to be one smaller than the guess.
    Go back to step two.
*/

export default function(nums:Array<number>, key:number): number {

    let min = 0;
    let max = nums.length - 1;

    while (min <= max) {
        let mid = Math.floor((min+max)/2);
        if (nums[mid] === key) {
            return mid;
        }
        if (nums[mid] < key) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return -1;
}