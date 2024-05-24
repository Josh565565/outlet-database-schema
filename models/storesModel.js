module.exports = (sequelize, DataTypes) => {
    const Store = sequelize.define("store", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nameOfStore: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        socialMediaHandles: {
            type: DataTypes.JSON,
            allowNull: true
        },
        domainName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true
        },
        accountId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        isRegistered: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        businessRegistrationNumber: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Store;
};
