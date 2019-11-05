'use strict'

const Category = require('../models/category')
const Parser = require('simple-text-parser')
var parser = new Parser()

parser.addRule(/\[\S]+/ig, function(tag){
    return Range.substr(1)
})

async function getCategory(req, res){
    var text = parser.render(req.params.txt)
    console.log(text)
    var cat = await Category.findOne({category: text})
    
    if(!cat){
        cat = new Category({
            category: text
        })
        await cat.save()
    }
    console.log(cat)
    req.category = cat
    next()
}

module.exports = getCategory