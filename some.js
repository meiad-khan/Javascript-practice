
//some method checks if at least one element in an array passes an specific test case. It returns true/false (boolean).

const currentUserRole = ['user', 'editor'];
const featureUserRole = ['admin', 'manager'];
const canAccess = currentUserRole.some(role => featureUserRole.includes(role));
console.log(canAccess);