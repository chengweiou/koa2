const {expect} = require('chai')
const service = require('../../src/service/reqRecordService')
const db = require('../../src/db')
const operator = require('../data/operator')

describe('reqRecord service', () => {
  it('save delete', async() => {
    let e = {
      url: 'POST /login',
      ip:'::ffff:127.0.0.1',
      duration: 216,
      os:'Apple Mac OS X',
      isMobile: false,
      browser:'Chrome',
      version:'73.0.3683.103',
      updateAt:'2019-05-12T06:35:20.633Z',
    }
    e = await service.save(e)
    expect(e._id).to.be.a('object')
    service.delete(e)
  })

  it('count', async() => {
    let count = await service.count({name: ''})
    expect(count).to.be.deep.eq(2)
  })

  it('list', async() => {
    let list = await service.find({name: 'POST /login', start: 0, limit: 10})
    expect(list.length).to.be.deep.eq(1)
    expect(list[0].url).to.be.deep.eq('POST /login')
  })
  before(async() => {
    await db.drop()
    operator.saveReqRecord()
  })
  after(async() => {
    await db.drop()
  })
})