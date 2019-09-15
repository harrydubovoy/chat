const Jimp = require('jimp');

const createID = (a, b) => {
  return a < b ? a + b : b + a;
};

const getID = (str, id) => {
  return str.replace(id, '');
};

const crop = (image, type) => {
  return Jimp.read(image.path)
    .then((result) => {
      result
        .cover(210, 210)
        .write(`${image.destination}/${image.originalname}`);
      return {
        message: "Image uploaded",
        image
        ,
      };
    })
    .catch(error => {
      console.error(error);
      return {
        message: "Error! Image not uploaded",
        error,
      }
    });
};

module.exports = {
  createID,
  getID,
  crop
};