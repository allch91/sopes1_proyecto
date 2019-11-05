'use strict'

const Tweet = require('../models/tweet')

async function postTweet(req, res){
    
    try{
        const tweet = new Tweet({
            text : req.params.text,
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

module.exports = postTweet