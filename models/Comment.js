module.exports = (sequelize, DataTypes) =>{
    return sequelize.define(
        "Comments",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            is_secret: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            like_Num: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        { timestamps:true, underscored: true }
    )
}