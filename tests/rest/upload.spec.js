const {expect} = require('chai')
const fetch = require('../../src/fetch')
const config = require('../../config/env')
const host = `http://localhost:${config.server.port}`
const db = require('../../src/db')
const operator = require('../data/operator')

const wait = require('../../src/util/wait')

describe('upload controller', () => {
  let token
  it('upload', async() => {
    let rest = await fetch(`${host}/bb/upload`, {method: 'post', body: 'file=data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=', headers: {authorization: token}})
    expect(rest.code).to.be.deep.equal('SUCCESS')
  })

  before(async() => {
    await db.drop()
    operator.saveAccount()
    await wait(50) // 不然有可能数据还没插进去
    let rest = await fetch(`${host}/bb/login`, {method: 'post', body: 'username=admin&password=111111'})    
    token = `Bearer ${rest.data.token}`   
  })
  after(async() => {
    // await db.drop()
  })
})