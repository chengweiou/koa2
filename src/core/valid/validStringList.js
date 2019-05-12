const paramError = require('../error/paramError')

class validString {
  constructor(name, ...v) {
    this.name = name
    this.v = v
    this.showV = this.v.length > 1 ? `[${this.v[0]}...${this.v[this.v.length-1]}]` : `${this.showV}`
    this.showV = this.showV.length > 50 ? `${this.showV.substring(0, 10)}...${this.showV.substring(this.showV.length-20, this.showV.length)}` : this.showV
  }
  are() {
    return this
  }
  notAllEmpty() {
    let empty = this.v.find(e => e===0 || e)
    if (!empty) throw new paramError(`${this.name}: ${this.showV}, can not be all empty`)
    return this
  }
  noneEmpty() {
    let empty = this.v.find(e => e!==0 || !e)
    if (empty)  throw new paramError(`${this.name}: ${this.showV}, must be none empty`)
    return this
  }
  notSame() {
    if (this.v.length !== new Set(this.v).size) throw new paramError(`${this.name}: ${this.v}, must not all same`)
  }
  // todo add thinking first, not valid yet
  lengthIn(a, b) {
    if (b) {
      let min = Math.min(a, b)
      let max = Math.max(a, b)
      if (this.v.find(e => e.length < min || e.length > max)) throw new paramError(`${this.name}: ${this.showV}, length must all > ${min} && < ${max}`)
    } else {
      if (this.v.find(e => e.length > a))  throw new paramError(`${this.name}: ${this.showV}, length must < ${a}`)
    }
    return this
  }
}

module.exports = validString