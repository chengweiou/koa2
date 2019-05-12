const model = require('../model/reqRecord')

module.exports = {
  save: async(e) => {
    e.updateAt = new Date()
    e = new model(e)
    await e.save()
    return e
  },
  delete: async(e) => {
    await model.deleteOne({_id: new model(e).id})
  },
  count: async(filter) => {
    return await model.countDocuments({url: {$regex: `${filter.name}.*`}})
  },
  find: async(filter) => {
    let result = await model.find({url: {$regex: `${filter.name}.*`}}, '-__v').skip(filter.start).limit(filter.limit).sort('updateAt')
    return result
  },
}