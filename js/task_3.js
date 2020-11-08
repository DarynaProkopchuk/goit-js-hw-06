const getUsersWithGender = (array, gender) => array.filter((user) => gender === user.gender).map(({name}) => (name));

console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
