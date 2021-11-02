module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "BoardCategory",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                aoutoIncrement: true,
                primaryKey: true,
            },
            category_name: {
                type: DataTypes.STRING,
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
    )
}