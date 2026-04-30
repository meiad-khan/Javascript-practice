// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.

const basicCashe = new Map();

const expensiveTask = (id) => {
  console.log("Expensive task is call for id: ", id);
  return {
    id: id,
    data: `some data for id: ${id}`,
    timestamp: new Date().getTime()
  };
};
const getData = (id) => {
  if (basicCashe.has(id)) {
    console.log("cache hit for id: ", id);
    return basicCashe.get(id);
  }
  console.log("cache miss for id: ", id);
  const data = expensiveTask(id);
  basicCashe.set(id, data);
  return data;
}
console.log(basicCashe);
console.log(getData(123));
console.log(getData(123));
console.log(basicCashe);