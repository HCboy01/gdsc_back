const { User } = require("../model/index");

const Op = require("sequelize").Op;//이건 뭐지

exports.getUser = async (userId) => {
    return await User.findOne({
      attributes: [
        "user_id",
        "email",
        "name",
        "nickname",
        "major",
        "profile_pic",
        "is_auth",
      ],
      where: {
        id: userId,
      },
    });
  };

exports.updateUser = async (userId, nickname) => {
    return await User.update(
      {
        nickname,
      },
      {
        where: {
          id: userId,
        },
      }
    );
  };
  