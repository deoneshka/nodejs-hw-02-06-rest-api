const path = require('path');
const fs = require('fs/promises');

const avatarsDir = path.join(process.cwd(), 'public/avatars');

const updateAvatarImg = (userId, originalname, tmpFileName) => {
  const fileFormat = originalname.replace(/.*(?=\.)/, '');
  const updatedFileName = `${userId}${fileFormat}`;
  const fileName = path.join(avatarsDir, updatedFileName);

  fs.rename(tmpFileName, fileName);

  return updatedFileName;
};

module.exports = updateAvatarImg;
