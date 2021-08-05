const fs = require('fs/promises');
const { updateById, getById } = require('../../services/users');
const {
  updateAvatarImg,
  normalizeImg,
} = require('../../helpers/users/updateAvatar');

const updateAvatar = async (req, res, next) => {
  if (!req.file) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Please attach a file',
    });
    return;
  }

  const userId = req.user._id;
  const { path: tmpFileName, originalname } = req.file;

  try {
    const user = await getById(userId);

    if (!user) {
      res.status(401).json({
        status: 'Unauthorized',
        code: 401,
        message: 'Not authorized',
      });

      return;
    }

    await normalizeImg(tmpFileName);

    const updatedFileName = updateAvatarImg(userId, originalname, tmpFileName);

    const updatedUser = await updateById(userId, {
      avatarURL: `http://localhost:3000/static/avatars/${updatedFileName}`,
    });

    res.status(200).json({
      status: 'OK',
      code: 200,
      result: updatedUser.avatarURL,
    });
  } catch (error) {
    fs.unlink(tmpFileName);
    next(error);
  }
};

module.exports = updateAvatar;
