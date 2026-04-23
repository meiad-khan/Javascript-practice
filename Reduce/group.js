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
  // console.log(acc, response);
  // if (acc[response]) { //if(response in acc)
  //   acc[response]++;
  // } else {
  //   acc[response] = 1;
  // }

  acc[response] = (acc[response] || 0) + 1;

  return acc;
}, {});
// console.log(countByResponse);
//? Output
// { A: 5, C: 3, B: 5, D: 1 }



//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const groupedData = sales.reduce((group, { category, price, quantity }) => {
  group[category] ??= { totalRevenue: 0, itemCount: 0 }; //-->Nullish Coalescing Assignment Operator (??=). If group[category] is null or undefined then assign the default value. Otherwise keep the existing value;
  group[category].totalRevenue += price * quantity;
  group[category].itemCount += quantity;
  return group;
},{})

console.log(groupedData);

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };
