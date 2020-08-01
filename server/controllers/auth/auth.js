const db = require('../../models/db');

exports.authenticate = async (req, res, next) => {
  try {
    const { user } = req;

    if (user.type === 'SIGNUP') {
      return res.redirect(`${process.env.HOST_CLIENT_ADD}account-details`);
    } else if (user.type === 'LOGIN') {
      return res.redirect(`${process.env.HOST_CLIENT_ADD}`);
    }
    throw new Error('Passport error');
  } catch (err) {
    return next(err);
  }
};

exports.addDetails = async (req, res, next) => {
  try {
    const {
      user_id,
      name,
      dob,
      contact,
      degree,
      college,
      city,
      state,
      linkedin_url,
    } = req.body;

    const user = {
      name,
      dob,
      contact,
      degree,
      college,
      city,
      state,
      linkedin_url,
    };
    let check_user = await db.User.findOne({ where: { user_id: user_id } });
    if (!check_user) {
      throw new Error('Invalid user-id');
    }
    check_user = await check_user.update(user);
    return res
      .status(200)
      .json({ success: true, message: 'Fields updated successfully' });
  } catch (err) {
    return next(err);
  }
};
