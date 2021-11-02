module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "Message",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                aoutoIncrement: true,
                primaryKey: true,
            },
            content: {
                type: DataTypes.TEXT,
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