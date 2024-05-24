module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("order", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        storeId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        productId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        transactionId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        initiatedDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        completedDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        customerId: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    });

    return Order;
};
