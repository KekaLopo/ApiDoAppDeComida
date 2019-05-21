const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://kekalopo:aae49f42f@ifoode-rdg8z.mongodb.net/test?retryWrites=true'
    }
}
module.exports = variables;