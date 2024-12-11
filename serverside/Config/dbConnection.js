// const mongoose = require('mongoose');

// const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.CONNECTION_STRING, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Database connected successfully');
//     } catch (error) {
//         console.error('Error connecting to the database:', error.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDb;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;

