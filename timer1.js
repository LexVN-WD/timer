// GOALS

/* 
(1):create function that can take command line inputs and beep according to time intervals
(2): 

*/
let nodeTimes = process.argv.slice(2);
/* takes and stores command line argument into new array
starting at command line index 2 (after vm and file location).
This will allow us to record more than 1 time if someone passes 
multiple times on the same line*/

let timeArr = [];
// create array to hold these time values


for (const nodeTime of nodeTimes) {
  let time = Number(nodeTime);
  /*Change command line argument from string to number type.
  Number() tries to change it to number type, but if it isn't able to
  it returns NaN.*/

  if (time > 0) {
    timeArr.push(Number(time * 1000));
    /* if the converted string is a number, and it is greater than 0
    (non-negative number), push that value into the timeArr 
    multiplied by 1000 (to get milliseconds for setTimeout later)*/
  }
}

timeArr.sort(function (a, b) { return a - b });
// sort the array from lowest time to highest time

for (const trueTime of timeArr) {
  /*Now that we have the true time values in milliseconds from the
  timeArr, we can implement it in the setTimeout*/
  let delay = trueTime;
  /* created new variable here so I can increment it in case there are
  multiple times */

  setTimeout(() => {
    process.stdout.write('\x07');
    //console.log(delay / 1000); -> Turn on to see visual representation to line up with when sound will happen
  }, delay);
  // setTimeout will play that sound for every number in timeArr using the correct milliseconds listed

};