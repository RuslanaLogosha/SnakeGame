const User = require('./schemas/user');

const getAllRatings = async () => {
  const results = await User.find({});
  return results;
};

const getRatingByUserId = async id => {
  const result = await User.findOne({ id });
  return result;
};

const createUsersRating = async body => {
  const result = await User.create(body);
  return result;
};

const updateUserRating = async (id, body) => {
  const result = await User.findByIdAndUpdate(
    { id },
    { ...body },
    { new: true },
  );
  return result;
};

module.exports = {
  getAllRatings,
  getRatingByUserId,
  createUsersRating,
  updateUserRating,
};
