const paramError = require('../error/paramError')

const validString = require('./validString')
const validNumber = require('./validNumber')
const validNumberList = require('./validNumberList')
const validStringList = require('./validStringList')

module.exports = {
  string: (name, ...v) => {
    return v.length === 1 ? new validString(name, v[0]) : new validStringList(name, ...v)
  },
  number: (name, ...v) => {
    let list = []
    for(let e of v) {
      if (isNaN(e)) throw new paramError(`${name}: ${v}, must be number`)
      try {
        list.push(parseInt(e))
      } catch(err) {
        throw new paramError(`${name}: ${v}, must be number`)
      }
    }
    return list.length === 1 ? new validNumber(name, list[0]) : new validNumberList(name, ...list)
  },
}