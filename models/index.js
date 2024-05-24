const dbConfig = require('../config/dbConfig.js');
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

// Here Authenticate connection to the database
sequelize.authenticate()
    .then(() => {
        console.log(`Connected to MySQL database.`);
    })
    .catch(err => {
        console.log(`Unable to connect to the database: ${err}`);
    });

const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import and define models
db.Account = require('./accountModel.js')(sequelize, DataTypes);
db.User = require('./usersModel.js')(sequelize, DataTypes);
db.Product = require('./productsModel.js')(sequelize, DataTypes);
db.Customer = require('./customersModel.js')(sequelize, DataTypes);
db.Order = require('./ordersModel.js')(sequelize, DataTypes);
db.Store = require('./storesModel.js')(sequelize, DataTypes);
db.Transaction = require('./transactionsModel.js')(sequelize, DataTypes);
db.Newsletter = require('./newsletterModel.js')(sequelize, DataTypes);

// Here I defined Associations
db.Account.hasMany(db.Customer, { foreignKey: 'accountId' });
db.Customer.belongsTo(db.Account, { foreignKey: 'accountId' });

db.Account.hasMany(db.Product, { foreignKey: 'accountId' });
db.Product.belongsTo(db.Account, { foreignKey: 'accountId' });

db.Account.hasMany(db.User, { foreignKey: 'accountId', as: 'accountUsers' });
db.User.belongsTo(db.Account, { foreignKey: 'accountId' });

db.Account.hasMany(db.Store, { foreignKey: 'accountId' });
db.Store.belongsTo(db.Account, { foreignKey: 'accountId' });

db.Store.hasMany(db.Order, { foreignKey: 'storeId' });
db.Order.belongsTo(db.Store, { foreignKey: 'storeId' });

db.Customer.hasMany(db.Order, { foreignKey: 'customerId' });
db.Order.belongsTo(db.Customer, { foreignKey: 'customerId' });

db.Product.hasMany(db.Order, { foreignKey: 'productId' });
db.Order.belongsTo(db.Product, { foreignKey: 'productId' });

db.Order.hasOne(db.Transaction, { foreignKey: 'orderId' });
db.Transaction.belongsTo(db.Order, { foreignKey: 'orderId' });


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    });


module.exports = db;
