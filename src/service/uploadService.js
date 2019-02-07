const failError = require('../error/failError')
const fs = require('fs')
const path = require('path')

module.exports = {
  save: async(e) => {
    let folderList = e.filename.split('/')
    let folder = ''
    for(let i=0; i<folderList.length-1; i++) {
      folder = path.join(folder, folderList[i])
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder)
      }
    }
    let buffer = Buffer.from(e.content, 'base64')
    try {
      await fs.promises.writeFile(e.filename, buffer)
    } catch(err) {
      throw new failError(`write file to ${e.filename}`)
    }  
  },
}