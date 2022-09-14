/*Emergency cess
Due to a natural disaster, the government is exploring various ways to gather relief fund. One proposal is to collect a one time cess from salaried employees. As per the proposal, everyone should pay ceil(7% of their monthly salary).

Given a the number of employees and their monthly salaries, help the government find the fund that can be gathered in a month.

Write a function to do this calculation.

Input
First line contains an integer n, denoting the number of employees. Next line contains n space seperated integers, denoting the monthly salaries of the n employees.

Output
One Integer, denoting the result.

Example
Sample Input:

5
100 200 300 400 555
Sample Output:

109
Explanation
First line is 5, which denotes the length of input n.

100 200 300 400 555 denotes the monthly salaries of these n people.

As per the rule,

ceil(7% of 1st person monthly salary) is 7

ceil(7% of 2nd person monthly salary) is 14

ceil(7% of 3rd person monthly salary) is 21

ceil(7% of 4th person monthly salary) is 28

ceil(7% of 5th person monthly salary) is 39

Resultant sum will be 7+14+21+28+39 = 109
*/
let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
function calculateTotalFund(salaries, peopleCount){
    let sum =0;
    for(i=0;i<peopleCount;i++)
    {

       sum+=Math.ceil((7*salaries[i])/100)
    }
return sum;
}

function ConvertToNumber(list){
    for(let each in list){
        list[each]=Number(list[each])
    }
}

let peopleCount = parseInt(readLine());
let salaries = readLine().split(" ");
ConvertToNumber(salaries);
let totalFund = calculateTotalFund(salaries, peopleCount);
console.log(totalFund);