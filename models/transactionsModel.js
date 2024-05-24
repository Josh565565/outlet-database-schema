module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define("transaction", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        orderId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        mediumOfPayment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paymentReferenceCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paymentCallbackLink: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Transaction;
};
