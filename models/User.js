module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primatyKey: true,
            },
            user_id: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            nickname: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            major: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            profile_pic: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            is_auth: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATETIME,
                allowNull: false,
            },
            updated_at: {
                type: DataTypes.DATETIME,
                allowNull: false
            },

        },
        { timestamps:true, underscored: true }
        );
    } 
