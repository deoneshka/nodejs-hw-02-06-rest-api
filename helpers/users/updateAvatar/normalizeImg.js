const Jimp = require('jimp');

const normilizeImg = async tmpFileName => {
  const image = await Jimp.read(`${tmpFileName}`);
  return await image.resize(250, 250).writeAsync(`${tmpFileName}`);
};

module.exports = normilizeImg;
