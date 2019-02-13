const app = new (require('koa'))()

app.use(require('koa-body')({multipart: true}))
app.use(require('koa2-cors')())
app.use(require('./middleware/init/log'))
app.use(require('./middleware/init/ok'))
if (process.env.NODE_ENV !== 'prod') app.use(require('./middleware/reqTimer'))
app.use(require('./middleware/errorHandler'))
app.use(require('./middleware/paramHandler'))
app.use(require('./middleware/loginUserHandler'))
app.use(require('./middleware/loginBbHandler'))
app.use(require('./router').routes()).use(require('./router').allowedMethods())

const config = require('./config/env')
const server = app.listen(config.server.port)

require('./core/log/realtime').init(app.listen(config.server.log.port))

const mongoose = require('mongoose')
mongoose.connect(config.db.host, {useNewUrlParser: true})