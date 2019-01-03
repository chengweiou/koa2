# koa2
a koa2 business framework. base on @weiceng1sheng/restful-design

出于个人喜好，环境:

  node: 11
  eslint: indent 2, semi never, quotes single
  行宽: 180 (毕竟一行横着看比竖着看来的舒服)
 
build 环境: 位于 src/config/env 主要有 dev, prod
   
依赖模块及作用
  koa-body: 接收前端参数
  koa2-cors: 跨域
  ws: 实时日志
  log4js: 日志
 
拓展 koa 的 ctx，增加 ctx.ok, ctx.log
日志: 
  参数: name 只是相对 v 做了格式处理，可以只给 name，不给 v
  格式: src/log/index
  记录方式: 
    ctx.log.c(name, value) // console
    ctx.log.d(name, value) // debug
    i, w, e... // info, warn, error
    
验证类: (name, v) 
  参数:
    name-用于反馈出一个友好的提示名, v-实际值
  string的值: 
    is: 默认判断是否有值
    lengthIn: 长度在a, b之间
    lengthIs: 长度为固定值
    mongoId: 默认只是判断长度是否在mongoId的指定范围
    of: 是否是给定list的某一个值
  number的值:
    positive: 正数
    in: 值在a, b之间
  numberList的值: 
    notSame: 这一堆值是否完全不一样
    
  e.g.: name的长度在1-20位 valid.string('name', e.name).is().lengthIn(1, 20)
  
工具类:
  参数:
    t-等待时间 秒
  wait: 语法糖，可以不用嵌套形式实现等待 
    e.g.: await wait(1000) // 等待一秒
    
需要修改的地方:
  配置文件:
  createRestAndLog: projectname, 日志过滤项目外引起的无权错误
  realtime/verifyClient: 实时日志的人加入访问限制
  useridHandler: 获取登录者id的方式
