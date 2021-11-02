module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "Board",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                aoutoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            image_url: {
                type: DataTypes. BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            is_secret: {
                type:DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            like_num: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            comment_num: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },
            is_hot: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        { timestamps:true, underscored: true }
    )
}