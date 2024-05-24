module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define("account", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.ENUM('admin', 'accountant', 'customer'),
            allowNull: false
        },
        users: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        store: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        saleRep: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        admin: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    });

    return Account;
};
