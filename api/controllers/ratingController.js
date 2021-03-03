const User = require('../model/users');

const getAllRatings = async (_req, res, next) => {
  try {
    const contacts = await User.getAllRatings();
    return res.json({
      status: 'success',
      code: 200,
      data: {
        contacts,
      },
    });
  } catch (e) {
    next(e);
  }
};

const getRatingByUserId = async (req, res, next) => {
  try {
    const contact = await User.getRatingByUserId(req.params.id);
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          contact,
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
    const contact = await User.createUsersRating(req.body);
    return res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        contact,
      },
    });
  } catch (e) {
    next(e);
  }
};

const updateUserRating = async (req, res, next) => {
  try {
    console.log(req.body);
    const contact = await User.updateUserRating(req.params.id, req.body);
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          contact,
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
