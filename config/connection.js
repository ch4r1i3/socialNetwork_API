const { connect, connection } = require('mongoose');

const connectionString =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/SocialNetwork_DB';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;