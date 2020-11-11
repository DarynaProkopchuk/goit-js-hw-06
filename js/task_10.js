const getSortedUniqueSkills = (array) => array.reduce((acc, { skills }) => acc.concat(skills), [])
.filter((e,i,a)=>a.indexOf(e)==i).sort()
console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',