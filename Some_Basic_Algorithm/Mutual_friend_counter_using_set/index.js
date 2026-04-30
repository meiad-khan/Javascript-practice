//Problem Statement

//You are given two large arrays, listA and listB. Each array contains user objects.
//A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

//Your task is to write an efficient function that takes both lists as input
//and returns the total count of users that are present in both lists.

//! Do not change anything in data setup part

//----------Data setup block---------------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}
const commonFrineds = (usersA, usersB) => {
  const startTime = performance.now();
  const mutualFriend = [];
  const idListA = new Set(usersA.map(user => user.id));
  usersB.forEach(user => {
    if (idListA.has(user.id)) {
      mutualFriend.push(user);
    }
  })
  const endTime = performance.now();
  return { count: mutualFriend.length, timeTook: endTime - startTime };
}
console.log(commonFrineds(usersA, usersB));