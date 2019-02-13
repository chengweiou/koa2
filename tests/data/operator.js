const weaponOperator = require('./weapon/operator')
const accountOperator = require('./account/operator')
const xxxOperator = require('./xxx/operator')

module.exports = {
  saveXxx: () => {
    xxxOperator.save()
  },
  saveWeapon: () => {
    weaponOperator.save()
  },
  saveAccount: () => {
    accountOperator.save()
  },
}