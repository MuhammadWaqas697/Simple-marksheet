#! /usr/bin/env node
let physicsMarks = 80;
let chemistryMarks = 75;
let mathMarks = 90;
let theTotalMarks = 300;
let obtainedMarks = physicsMarks + chemistryMarks + mathMarks;
let percentage = (obtainedMarks / theTotalMarks) * 100;
console.log("marksheet");
console.log("Physics marks", physicsMarks);
console.log("Chemistry marks", chemistryMarks);
console.log("Math marks", mathMarks);
console.log("Total marks", theTotalMarks);
console.log("Obtained narks", obtainedMarks);
console.log("Percentage", percentage.toFixed(2) + "%");
if (percentage >= 80) {
    console.log("Grade A+");
}
else if (percentage >= 70) {
    console.log("Grade A");
}
else if (percentage <= 60) {
    console.log("Grade B");
}
else if (percentage <= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
export {};
