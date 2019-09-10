if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb+srv://node-training-vrodr.mongodb.net/test'}

} else {
    module.exports = {mongoURI: 'mongodb://localhost/node-training'}
}