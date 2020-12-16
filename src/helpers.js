const reduceLangInRepos = (acc, cur) => {
  let newAcc;
  cur.languages.nodes.forEach((language) => {
    // add new languages to the accumulated language object
    if (!Object.keys(acc).includes(language.name)) {
      const newLang = language.name;
      newAcc = { ...acc, ...newAcc, [newLang]: 0 };
    }
  });

  return newAcc !== undefined ? newAcc : acc;
};
// add repoIdx to function arguments if uncommenting the console.log
const reduceLangBytes = (acc, cur) => {
  if (cur.languages.nodes.length === 0) return acc;
  let newAcc;
  cur.languages.nodes.forEach((lang, idx) => {
    // console.log(
    //   `looping language ${lang.name} of language node ${idx} with size ${cur.languages.edges[idx].size} of repoIdx
    //      ${repoIdx}`,
    // );
    const langInNodes = lang.name;
    newAcc = { ...acc, ...newAcc, [langInNodes]: acc[langInNodes] + cur.languages.edges[idx].size };
  });
  return newAcc;
};

export default {
  reduceLangInRepos,
  reduceLangBytes,
};
