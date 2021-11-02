module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "Liked",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                aoutoIncrement: true,
                primaryKey: true,
            },
            like_category: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            ref_id: {
                type: DataTypes.INTEGER,
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