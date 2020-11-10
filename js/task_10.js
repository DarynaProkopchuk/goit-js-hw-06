const getSortedUniqueSkills = (array) => [...array].reduce((acc, { skills }) => acc.concat(skills), [])
.filter(({ value }, index, array) => array.indexOf({value} === index)).sort();


const getSortedUniqueSkills = (array) => array.map(function ({ skills }, i) {
    return skills
  }).reduce(function (allSkills, skills) {
      return allSkills.concat(...skills)
  }, []).filter((e,i,a)=>a.indexOf(e)==i).sort()


  const getSortedUniqueSkills = (array) => array.reduce((acc, user) => acc.concat(...user.skills), []).filter((skill, index, arr) => !arr.includes(skill[index])).sort();