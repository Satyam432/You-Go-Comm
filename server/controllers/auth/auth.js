const db = require('../../models/db');
const jwt = require('jsonwebtoken');

exports.authenticate = async (req, res, next) => {
  try {
    const { user } = req;
    const user_check = await db.User.findOne({
      where: { email: user._json.email },
    });

    // Login
    if (user_check) {
      const token = jwt.sign(
        {},
        process.env.JWT_SECRET || 'yougocomm123321mmocoguoy',
        { expiresIn: '1h' }
      );
      return res.status(200).json({ success: true, token: token });
    }

    // else Signup
    const user_ = await db.User.create({ email: user._json.email });

    res.redirect(
      process.env.FALLBACK_URL + `?id=${user_.user_id}` ||
        `http://localhost:3000/account-details?id=${user_.user_id}`
    );
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
    const check_user = await db.User.update(
      { user },
      { where: { user_id: user_id } }
    );
    if (!check_user) {
      throw new Error('Error in updating fields');
    }
    return res
      .status(200)
      .json({ success: true, message: 'Fields updated successfully' });
  } catch (err) {
    return next(err);
  }
};
