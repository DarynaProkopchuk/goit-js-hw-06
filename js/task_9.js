const getNamesSortedByFriendsCount = (array) => [...array].sort(
    (userPrev, userNext) => userPrev.friends.length - userNext.friends.length
  )
  .map(({name}) => (name));

console.log(getNamesSortedByFriendsCount(users));