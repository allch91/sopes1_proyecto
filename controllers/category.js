'use strict'

const Category = require('../models/category')
const Parser = require('simple-text-parser')
var parser = new Parser()

parser.addRule(/\#[\S]+/ig, function(tag){
    return tag.substr(1)
})

async function getCategory(req, res, next){
    console.log('txt: ' + req.query.txt)
    var text = parser.toTree(req.query.txt)[1].text
    console.log('categoria: ' + text)
    var cat = await Category.findOne({category: text})
    
    if(!cat){
        cat = new Category({
            category: text
        })
        await cat.save()
    }
    console.log('category: '+cat)
    req.category = cat
    next()
}

module.exports = getCategory