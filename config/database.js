if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI:
    'mongodb://krzych3d:Ytrewq321!@node-training-shard-00-00-vrodr.mongodb.net:27017,node-training-shard-00-01-vrodr.mongodb.net:27017,node-training-shard-00-02-vrodr.mongodb.net:27017/test?ssl=true&replicaSet=node-training-shard-0&authSource=admin&retryWrites=true&w=majority'}
} else {
    module.exports = {mongoURI:'mongodb://localhost/node-training'}
}