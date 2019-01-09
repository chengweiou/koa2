const Router = require('koa-router')
const router = new Router()

const service = require('../service/xxxService')
const valid = require('../valid')

const fetch = require('../fetch')
const config = require('../../config/env')

router.post('/xxx', async(ctx, next) => {
  let e = {
    name: ctx.params.name,
    age: ctx.params.age,
  }
  valid.string('xxx.name', e.name).is().lengthIn(1, 20)
  valid.number('xxx.age', e.age).is().in(100)
  e = await service.save(e)
  ctx.ok(e._id)
})

router.delete('/xxx/:_id', async(ctx, next) => {
  let e = {
    _id: ctx.params._id,
  }
  await service.delete(e)
  ctx.ok()
})

router.put('/xxx/:_id', async(ctx, next) => {
  let e = {
    _id: ctx.params._id,
    name: ctx.params.name,
    age: ctx.params.age,
  }
  if (!e.name) {
    let rest = await fetch(`${config.site.other1}/api/user/${e._id}`, {headers: {apikey: config.site.other1.apikey}})
    e.name = rest.data.name
  }
  if (e.name)valid.string('xxx.name', e.name).is().lengthIn(1, 20)
  if (e.age) valid.number('xxx.age', e.age).is().in(100)
  let success = await service.update(e)
  ctx.ok(success)
})

router.get('/xxx/:_id', async(ctx, next) => {
  let e = {
    _id: ctx.params._id
  }
  let xxx = await service.findById(e)
  ctx.ok(xxx)
})
router.get('/xxx/count', async(ctx, next) => {
  let filter = {
    name: ctx.params.name || '',
  }
  let count = await service.count(filter)
  ctx.ok(count)
})
router.get('/xxx', async(ctx, next) => {
  let filter = {
    name: ctx.params.name || '',
    start: parseInt(ctx.params.start) || 0,
    limit: parseInt(ctx.params.limit) || 10
  }
  let list = await service.find(filter)
  ctx.ok(list)
})

module.exports = router