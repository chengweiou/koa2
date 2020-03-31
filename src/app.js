const app = new (require('koa'))()
app.use(require('./middleware/init/log'))
app.use(require('./middleware/init/ok'))
app.use(require('./middleware/reqRecord'))
app.use(require('./middleware/reqTimer'))
app.use(require('koa-useragent').userAgent)
app.use(require('./middleware/errorHandler'))
app.use(require('./middleware/paramHandler'))

app.use(require('./middleware/loginAccountHandler'))
// todo tip gateway 是通过写配置文件， gateway.list 通过代码形式，二选一即可
require('./middleware/gateway').forEach(e => {
  app.use(e)
})
const config = require('config')
const server = app.listen(config.get('server.port'))

require('./core/log/realtime').init(app.listen(config.get('server.log.port')))

const mongoose = require('mongoose')
mongoose.connect(config.get('db.host'), {useNewUrlParser: true, useUnifiedTopology: true})