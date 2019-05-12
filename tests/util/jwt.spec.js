const {expect} = require('chai')
const jwt = require('../../src/jwt')

describe('jwt util', () => {
  it('decode', async() => {
    let token = jwt.sign({personId: '1', extra: 'aa'})
    let account = jwt.verify(token)
    expect(account.personId).to.be.deep.equal('1')
    expect(account.extra).to.be.deep.equal('aa')
  })


  before(async() => {
  })
  after(async() => {
  })
})