const xxxOperator = require('./xxx/operator')
const reqRecordOperator = require('./reqRecord/operator')

module.exports = {
  saveXxx: () => {
    xxxOperator.save()
  },
  saveReqRecord: () => {
    reqRecordOperator.save()
  },

}