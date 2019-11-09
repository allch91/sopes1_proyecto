'use strict'

const Tweet = require('../models/tweet')

async function postTweet(req, res){
    
    try{
        const tweet = new Tweet({
            text : req.query.txt,
            user : req.user._id,
            category : req.category._id
        })
        await tweet.save()
        return res.status(200).send({tweet})
    }
    catch(e){
        return res.status(500).send({error: e})
    }
}

async function topTen(req, res){
    try{
        var tweets = await Tweet.find().populate('user')
        .populate('category').sort({_id: -1}).limit(10)
        return res.status(200).send({tweets})
    }
    catch(e){
        return res.status(500).send({error: e})
    }
}

module.exports = {
    postTweet,
    topTen
}