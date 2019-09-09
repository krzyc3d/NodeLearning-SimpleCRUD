if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI:
    'mongodb+srv://krzych3d:Ytrewq321!@node-training-vrodr.mongodb.net/test?retryWrites=true&w=majority'}
} else {
    module.exports = {mongoURI:'mongodb://localhost/node-training'}
}