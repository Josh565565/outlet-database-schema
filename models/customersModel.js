module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("customer", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        cardNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        exp: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nameOnCard: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        county: {
            type: DataTypes.STRING,
            allowNull: false
        },
        accountId: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    });

    return Customer;
};
