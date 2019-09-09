if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI:
    'mongo "mongodb+srv://node-training-vrodr.mongodb.net/test" --username krzych3d --password Ytrewq321!'}
} else {
    module.exports = {mongoURI:'mongodb://localhost/node-training'}
}