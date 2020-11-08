///
const calculateTotalBalance = array => array.reduce((acc,users) =>({balance}) => balance + acc,0);
const calculateTotalBalance = array => array.reduce((acc,users) => acc + ({balance}) ,0);
const calculateTotalBalance = array => array.reduce((acc,users) =>({balance}) => balance + acc,0);
const calculateTotalBalance = array => array.reduce((acc,balance) => acc + balance, 0);
const calculateTotalBalance = (users) => users.reduce((acc, users) => acc + users.balance, 0); ///


const calculateTotalBalance = array => array.reduce((acc, array) => acc + array.balance, 0);
console.log(calculateTotalBalance(users)); 
// 20916
