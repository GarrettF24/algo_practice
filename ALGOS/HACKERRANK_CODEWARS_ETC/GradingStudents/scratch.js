// HackerLand University has the following grading policy:
// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:
// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// Examples
//  round to  (85 - 84 is less than 3)
//  do not round (result is less than 40)
//  do not round (60 - 57 is 3 or higher)
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
// Function Description
// Complete the function gradingStudents in the editor below.
// gradingStudents has the following parameter(s):
// int grades[n]: the grades before rounding

// function gradingStudents(grades) {
//   // Write your code here
//   let newGrades = []
//   grades.map((grade) => {
//     let nearestMultOfFive
//     if (grade < 37) {
//       grade = grade
//     }
//     if (grade > 37) {
//       nearestMultOfFive = Math.ceil(grade / 5) * 5
//     }
//     if (nearestMultOfFive - grade < 3) {
//       grade = nearestMultOfFive
//     }
//     newGrades.push(grade)
//   })
//   return newGrades
// }

function gradingStudents(grades) {
  let newGrades = []
  grades.map((grade) => {
    let nearestMultOfFive
    grade < 37
      ? (grade = grade)
      : (nearestMultOfFive = Math.ceil(grade / 5) * 5)
    if (nearestMultOfFive - grade < 3) grade = nearestMultOfFive
    newGrades.push(grade)
  })
  return newGrades
}

console.log(gradingStudents([73, 67, 38, 33, 87, 79, 63]))
