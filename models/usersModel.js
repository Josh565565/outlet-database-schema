module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isFirstLogin: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        lastLogin: {
            type: DataTypes.DATE,
            allowNull: true
        },
        isTermsAccepted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        accountId: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    });

    return User;
};
