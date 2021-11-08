module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "BoardCategory",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            category_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { timestamps:true, underscored: true }
    )
}