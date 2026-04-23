const currentUserRole = ['user', 'editor'];
const featureUserRole = ['admin', 'manager'];
const canAccess = currentUserRole.some(role => featureUserRole.includes(role));
console.log(canAccess);