const mongoose = require('mongoose')

const memShcema = new mongoose.Schema({
    engName:{
        type: String,
        required: true
    },
    jpName:{
        type: String,
        required: true
    },
    youtubeURL:{
        type: String,
        required: true
    },
    twitterURL:{
        type: String,
        required: true
    },
    picURL:{
        type: String,
        required: true
    },
    date: {type: Number, default:Date.now()}
    },
    {
        collection:'holo-mem-list'
    }
)

const model = mongoose.model('Holomem' , memShcema)
module.exports = model ;