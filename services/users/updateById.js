const user = require('../../model/shemas/userShema');

const updateById = async (userId, body) => {
  try {
    const result = await user.findByIdAndUpdate(userId, body, {
      new: true,
    });

    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }

    throw error;
  }
};

module.exports = updateById;
