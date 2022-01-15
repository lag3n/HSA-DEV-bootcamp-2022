/**
  These exercises aim to get you familiar with object syntax. Hopefully it doesn't trigger
  highschool biology flashbacks.
 */

// You can think of an object like a python dictionary or tree
// They usually have lots of deeply nested data
const TreeOfLife = {
  // Objects can contain basic data types ...
  rank: 'domain',
  archae: 'archaebacteria',
  bacteria: 'eubacteria',
  // ... but they can also contain nested objects, arrays, functions, or anything else
  eukarya: {
    rank: 'kingdom',
    plantae: ['my succulent', 'tomatoes', 'big trees'],
    animalia: {
      rank: 'phylum',
      birds: 'work for the bourgeoisie.',
      humans: ['you', 'me', 'us', 'them', 'everyone!'],
    },
    fungi: {
      guy: "he's fun",
    },
    protista: 'What even is this?',
  },
  // The best domain's key
  bestDomain: 'archae',
}

// Write a function which returns the domain "archae"
const getArchae = () => {
  return (TreeOfLife.archae);
}

// Write a function which returns the array of humans
const getHumans = () => {
  return (TreeOfLife.eukarya.animalia.humans);
}

// Write a function which adds a name to the array of humans
const addHuman = (name) => {
  TreeOfLife.eukarya.animalia.humans.push(name);
}

// Write a fuction which returns the data representing the "bestDomain"
const getBestDomain = () => {
  let key = TreeOfLife.bestDomain;
  return (TreeOfLife[key]);
}

// Write a function which sets the best domain to "eukarya" and then returns the "bestDomain"
const setGetBestDomain = () => {
  TreeOfLife.bestDomain = "eukarya";
  return (getBestDomain());
}

/**
  Write a function using destructuring and object renaming which returns an array with all the ranks like:
  (Don't hardcode it, pull it from the TreeOfLife)
  [
    'domain',
    'kingdom',
    'phylum',
  ]
 */
const getRanks = () => {
  const {rank, eukarya: {rank : eukaryaRank, animalia: {rank : animaliaRank}}} = TreeOfLife;
  return ([rank, eukaryaRank, animaliaRank]);
}

// Write a function which uses destructuring and the rest operator to return everything BUT the "eukarya"
const noEukaryotes = () => {
  const byebye = (({ eukarya, ...others }) => others)(TreeOfLife);
  return (byebye);
}

module.exports = {
  getArchae,
  getHumans,
  addHuman,
  getBestDomain,
  setGetBestDomain,
  getRanks,
  noEukaryotes,
  TreeOfLife,
}
