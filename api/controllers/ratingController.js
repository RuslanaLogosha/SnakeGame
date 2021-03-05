const User = require('../model/users');

const getAllRatings = async (_req, res, next) => {
  try {
    const ratings = await User.getAllRatings();
    return res.json(ratings);
    //   ({
    //   status: 'success',
    //   code: 200,
    //   data: {
    //     ratings,
    //   },
    // });
  } catch (e) {
    next(e);
  }
};

const getRatingByUserId = async (req, res, next) => {
  try {
    const userRating = await User.getRatingByUserId(req.params.id);
    if (userRating) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          userRating,
        },
      });
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not Found',
      });
    }
  } catch (e) {
    next(e);
  }
};

const createUsersRating = async (req, res, next) => {
  try {
    console.log(req.body);
    const userRating = await User.createUsersRating(req.body);
    return res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        userRating,
      },
    });
  } catch (e) {
    next(e);
  }
};

const updateUserRating = async (req, res, next) => {
  try {
    console.log(req.body);
    const userRating = await User.updateUserRating(req.params.id, req.body);
    if (userRating) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          userRating,
        },
      });
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not Found',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllRatings,
  getRatingByUserId,
  createUsersRating,
  updateUserRating,
};
