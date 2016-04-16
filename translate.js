"use strict"

const data = require('./src.json')
const fs = require('fs');

var lastCommentId = 1
var commentMap = {}
var commentToId = {}

function traverseAndMutate(obj) {
  if(obj instanceof Array) {
    for(let elem of obj) traverseAndMutate(elem)
  }else if(obj instanceof Object) {
    for(let key of Object.keys(obj)) {
      if(key !== 'comments') {
        traverseAndMutate(obj[key])
      }else{
        let ids = []

        for(let comment of obj.comments){
          let commentKey = comment.author + comment.type + comment.text
          if(commentToId[commentKey]) {
            // comment already exists in commentMap
            ids.push(commentToId[commentKey])

          }else{
            // insert to commentMap
            commentMap[lastCommentId] = comment
            commentToId[commentKey] = lastCommentId
            ids.push('' + lastCommentId)
            lastCommentId += 1
          }
        }

        obj.commentIds = ids
      }
    }
  }
}

traverseAndMutate(data)
data.commentMap = commentMap

fs.writeFileSync('./data.json', JSON.stringify(data, null, '  '))
