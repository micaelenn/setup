const generatorsDir = './utils/plop/generators';

require('colors');
const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, generatorsDir);
const files = fs.readdirSync(dirPath);

const setGenerators = (plop) => {
  files.forEach(file => {
    require(`${generatorsDir}/${file}`)(plop);
  });
};

module.exports = (plop) => {
  setGenerators(plop);
}