const {expect, assert} = require('chai')
const valid = require('../../src/core/valid')
const paramError = require('../../src/core/error/paramError')

describe('valid string', () => {
  it('of', async() => {
    expect(() => valid.string('k', 'aaa').is().of('abcd', 'aac')).to.throw(paramError)
    expect(() => valid.string('k', 'aaa').is().of('aaa', 'aac')).to.not.throw(paramError)
  })
  it('not of', async() => {
    expect(() => valid.string('k', 'aaa').is().notOf('abcd', 'aac')).to.not.throw(paramError)
    expect(() => valid.string('k', 'aaa').is().notOf('aaa', 'aac')).to.throw(paramError)
  })

  before(async() => {
  })
  after(async() => {
    // await db.drop()
  })
})