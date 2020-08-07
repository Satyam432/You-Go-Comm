const db = require('../models/db');

exports.getFriends = async (req, res, next) => {
  try {
    const { user_id } = req.user;
    let result = await db.User.findOne({
      where: { user_id: user_id },
      include: [
        {
          model: db.User,
          as: 'followers',
          attributes: ['user_id', 'name', 'email'],
        },
        {
          model: db.User,
          as: 'following',
          attributes: ['user_id', 'name', 'email'],
        },
      ],
      attributes: ['user_id', 'name', 'email'],
    });
    if (!result) {
      throw new Error('Error');
    }

    result = result.get({ plain: true });

    result.followers.map((follower) => {
      return (follower.friend = undefined);
    });
    result.following.map((following) => {
      return (following.friend = undefined);
    });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

exports.addFriend = async (req, res, next) => {
  try {
    const { user_id } = req.user;
    const { friend_id } = req.body;
    if (!user_id || !friend_id) {
      throw new Error('Missing fields');
    }
    const friend = await db.Friend.create({
      following_id: user_id,
      follower_id: friend_id,
    });
    if (!friend) {
      throw new Error('Could not add friend');
    }
    return res.status(200).json({ success: true, message: 'Added friend' });
  } catch (error) {
    return next(error);
  }
};

exports.removeFriend = async (req, res, next) => {
  try {
    const { user_id } = req.user;
    const { friend_id } = req.body;
    const deleted_user = await db.Friend.destroy({
      where: { follower_id: user_id, following_id: friend_id },
    });
    if (!deleted_user) {
      throw new Error('Could not delete friend');
    }
    return res
      .status(200)
      .json({ success: true, message: 'Deleted Friend successfully' });
  } catch (error) {
    return next(error);
  }
};
