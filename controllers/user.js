'use strict'

const User = require('../models/user')

async function getUser(req, res, next){
    
    console.log('usr: ' + req.query.usr)
    console.log('nom: ' + req.query.nom)
    var user = await User.findOne({alias: req.query.usr})
    if(!user){
        user = new User({
            alias: req.query.usr,
            name: req.query.nom
        })
        await user.save()
    }
    console.log('usuario: '+user)
    req.user = user
    next()
}

module.exports = getUser