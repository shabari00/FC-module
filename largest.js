/*
Largest
Given an array A of size n.

The task is to complete the largestElement function. It should return the largest
 element present in the given array.

Note:
DO NOT use any inbuilt function.
Array may contain duplicate elements.
Input
First line contains one integer, denoting n. The next line contains n space seperated integers, 
denoting the elements of the given array.

Output
One Integer, denoting the result.

Example
Input1:

5
1 8 7 56 90
Output1:

90
Explanation1:

The largest element of given array [1, 8, 7, 56, 90] is 90.
*/
let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
function largestElement(array,n)
{
    let max = array[0];
    for(i=0;i<n;i++)
    {
        if(max<=array[i])
        {
            max=array[i];
        }
    }
    return max;
}
let n = parseInt(readLine());
let arr = readLine().split(" ");
let array = [];
for(i=0;i<n;i++)
{
    array[i]= parseInt(arr[i]);
}
console.log (largestElement(array,n));

