/*Area and Perimeter of the Circle - Classes Practice Problems
Design a Cirlce class which has 2 methods. One which calculates area of the circle and one which calculates circumference of the circle. Please use the pi value as 3.14. For any infeasible radius r, please return the area and circumference as 0

Your class should be named Circle. Method to get area should be named getArea. Method to get circumference should be named getCircumference.

Input
One line containing an integer denoting the radius.

Output
2 lines containing integers. First line containing the area of the circle. Second line containing the circumference of the circle. If the output is a float number, return the ceil of it.

Example
Input:

5
Output:

79
32
First line in input is radius which is 5. Area is 5*5*3.14 which is ceil(78.5) = 79, which is the first line of the output. Circumference is 2*3.14*5 which is ceil(31.40) = 32, which is the second line of the output.
*/
let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------



// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.
class  Circle{
constructor(radius){
  this.radius = radius;
}
getArea(){
 let area = this.radius*this.radius*3.14;
 area = Math.ceil(area);
 return area;
}
getCircumference()
{
  let circumference = this.radius*2*3.14;
  circumference = Math.ceil(circumference)
  return circumference;
}
  
}

// -------- Do NOT edit anything below this line ----------

let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());