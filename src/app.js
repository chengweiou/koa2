const app = new (require('koa'))()

app.use(require('koa-body')({multipart: true}))
app.use(require('koa2-cors')())
app.use(require('./middleware/init/log'))
app.use(require('./middleware/init/ok'))
if (process.env.NODE_ENV !== 'prod') app.use(require('./middleware/reqTimer'))
app.use(require('./middleware/errorHandler'))
app.use(require('./middleware/paramHandler'))
app.use(require('./middleware/loginAccountUserHandler'))
app.use(require('./middleware/loginAccountBbHandler'))
app.use(require('./router').routes()).use(require('./router').allowedMethods())

const config = require('config')
const server = app.listen(config.get('server.port'))

require('./core/log/realtime').init(app.listen(config.get('server.log.port')))

const mongoose = require('mongoose')
mongoose.connect(config.get('db.host'), {useNewUrlParser: true, useUnifiedTopology: true})