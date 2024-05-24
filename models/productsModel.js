module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('type1', 'type2'),
            allowNull: false
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false
        },
        accountId: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    });

    return Product;
};
