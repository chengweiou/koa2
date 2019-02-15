const paramError = require('../error/paramError')
class validNumberList {
  constructor(name, ...v) {
    this.name = name
    this.v = v
  }
  are() {
    return this
  }
  notSame() {    
    if (this.v.length !== new Set(this.v).size) throw new paramError(`${this.name}: ${this.v}, must not all same`)    
  }
  // todo 还未验证
  positive() {
    if (this.v.find(e => e < 1))  throw new paramError(`${this.name}: ${this.v}, must be all positive`)
    return this
  }
  in(a, b) {
    if (b) {
      let min = Math.min(a, b)
      let max = Math.max(a, b)
      if (this.v.find(e => e < min || e > max)) throw new paramError(`${this.name}: ${this.v}, must all > ${min} && < ${max}`)
    } else {
      if (this.v.find(e => e > a))  throw new paramError(`${this.name}: ${this.v}, must < ${a}`)
    }
    return this
  }
}
module.exports = validNumberList