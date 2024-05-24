module.exports = (sequelize, DataTypes) => {
    const Newsletter = sequelize.define("newsletter", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return Newsletter;
};
