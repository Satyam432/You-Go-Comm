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
        {
          id: user_check.user_id,
          email: user_check.email,
          name: user_check.name,
        },
        process.env.JWT_SECRET || 'yougocomm123321mmocoguoy',
        { expiresIn: '1h' }
      );
      return res
        .status(200)
        .cookie('token', token, {
          expires: new Date(Date.now() + 3600000),
          httpOnly: true,
        })
        .redirect('http://localhost:3000/');
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
