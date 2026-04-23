//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];


const countByResponse = surveyResponses.reduce((acc, response) => {
  console.log(acc, response);
  if (response in acc) {
    acc[response]++;
  } else {
    acc[response] = 1;
  }

  return acc;
}, {});
console.log(countByResponse);
//? Output
// { A: 5, C: 3, B: 5, D: 1 }
