'use strict'

const User = require('../models/user')

async function getUser(req, res){
    console.log(req.params.alias)
    console.log(req.params.name)
    var user = await Category.findOne({category: text})
    if(!user){
        user = new User({
            alias: req.params.alias,
            name: req.params.name
        })
        await user.save()
    }
    console.log(user)
    req.user = user
    next()
}

module.exports = getUser