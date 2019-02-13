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
}

module.exports = validString