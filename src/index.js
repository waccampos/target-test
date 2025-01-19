import { sum } from "./sum/index.js";
import { isFibonacci } from "./fib/index.js";
import { analyzeRevenue } from "./daily-revenue/index.js";
import { calculateStatePercentage, stateRevenue } from "./revenue/percentage.js";
import { reverseString } from "./reverse-characters/index.js";

// Question 1 - Sum calculation
console.log("1. Sum result:", sum());

// Question 2 - Fibonacci check
const numberToCheck = 5;
console.log(
  `2. The number ${numberToCheck} ${
    isFibonacci(numberToCheck) ? "belongs to" : "does not belong to"
  } the Fibonacci sequence`,
);

// Question 3 - Revenue analysis

const revenueAnalysis = analyzeRevenue();
console.log("3. Revenue Analysis:");
console.log(`   Lowest value: $ ${revenueAnalysis.lowestRevenue.toFixed(2)}`);
console.log(`   Highest value: $ ${revenueAnalysis.highestRevenue.toFixed(2)}`);
console.log(`   Days above average: ${revenueAnalysis.daysAboveAverage}`);

// Question 4 - State percentage calculation
const percentages = calculateStatePercentage(stateRevenue);
console.log("4. Revenue percentage by state:");
Object.entries(percentages).forEach(([state, percentage]) => {
  console.log(`   ${state}: ${percentage.toFixed(2)}%`);
});

// Question 5 - String reversal
const textToReverse = "Target Sistemas";
console.log("5. Reversed string:");
console.log(`   Original: ${textToReverse}`);
console.log(`   Reversed: ${reverseString(textToReverse)}`);
