const {expect} = require('chai')
const fetch = require('../../src/core/fetch')
const config = require('../../src/config/env')
const host = `http://localhost:${config.server.port}`
const db = require('../../src/db')
const operator = require('../data/operator')

describe('xxx controller', () => {
  it('save, delete', async() => {
    let rest = await fetch(`${host}/xxx`, {method: 'post', body: 'name=abc&age=18'})
    expect(rest.code).to.be.deep.equal('SUCCESS')
    let _id = rest.data    
    rest = await fetch(`${host}/xxx/${_id}`, {method: 'delete', })
    expect(rest.code).to.be.deep.equal('SUCCESS')
  })
  
  it('list', async() => {
    let rest = await fetch(`${host}/xxx`)
    expect(rest.code).to.be.deep.equal('SUCCESS')
    expect(rest.data.length).to.be.deep.equal(2)
  })

  it('findById, update', async() => {    
    let rest = await fetch(`${host}/xxx`)
    let _id = rest.data[0]._id
    let name = rest.data[0].name

    rest = await fetch(`${host}/xxx/${_id}`)
    expect(rest.code).to.be.deep.equal('SUCCESS')
    expect(rest.data.name).to.be.deep.equal(name)
    rest = await fetch(`${host}/xxx/${_id}`, {method: 'put', body: 'name=cba'})
    expect(rest.code).to.be.deep.equal('SUCCESS')
    rest = await fetch(`${host}/xxx/${_id}`)
    expect(rest.data.name).to.be.deep.equal('cba')
    expect(rest.data.age).to.be.deep.equal(20)

    await fetch(`${host}/xxx/${_id}`, {method: 'put', body: `name=${name}`})
  })

  it('findById: not exists', async() => {
    let rest = await fetch(`${host}/xxx/537eed02ed345b2e039652d5`)    
    expect(rest.code).to.be.deep.equal('SUCCESS')
    expect(rest.data.name).to.be.not.ok
  })
  it('save FAIL: name exists', async() => {
    let rest = await fetch(`${host}/xxx`, {method: 'post', body: 'name=aaa&age=92'})
    expect(rest.code).to.be.deep.equal('FAIL')
  })
  it('save FAIL: name too long', async() => {
    let rest = await fetch(`${host}/xxx`, {method: 'post', body: 'name=chikagea23s1df23a1s32df1sad5fv1sa856v1sa38e13f51a5seg13ad5s1g352sad153&age=92'})
    expect(rest.code).to.be.deep.equal('PARAM')
  })
  it('update FAIL: name too long', async() => {
    let rest = await fetch(`${host}/xxx`)
    let _id = rest.data[0]._id
    rest = await fetch(`${host}/xxx/${_id}`, {method: 'put', body: 'name=chikagea23s1df23a1s32df1sad5fv1sa856v1sa38e13f51a5seg13ad5s1g352sad153'})
    expect(rest.code).to.be.deep.equal('PARAM')
  })
  it('update FAIL: age too large', async() => {
    let rest = await fetch(`${host}/xxx`)
    let _id = rest.data[0]._id
    rest = await fetch(`${host}/xxx/${_id}`, {method: 'put', body: 'name=chikagea&age=6000'})
    expect(rest.code).to.be.deep.equal('PARAM')
  })

  before(async() => {
    await db.drop()
    operator.saveXxx()
  })
  after(async() => {
    // await db.drop()
  })
})