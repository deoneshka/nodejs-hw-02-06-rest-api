const path = require('path');
const multer = require('multer');

const tmpDir = path.join(process.cwd(), 'tmp');

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, tmpDir);
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 10000,
  },
});

const upload = multer({
  storage,
  fileFilter: (_, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Please attach a .png, .jpg or .jpeg file'));
    }
  },
});

module.exports = upload;
