"use strict"

const data = require('./src.json')
const fs = require('fs');

const typeMap = {
  NOTE: '補充說明',
  REF_MISSING: '需要出處',
  REF_CONTROVERSIAL: '出處爭議',
  QUESTIONABLE: '質疑',
  OTHER: null,
}

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

          comment.type = typeMap[comment.type]

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
        delete obj.comments
        obj.commentIds = ids
      }
    }
  }
}

traverseAndMutate(data)
data.commentMap = commentMap

fs.writeFileSync('./data.json', JSON.stringify(data, null, '  '))
