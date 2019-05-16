
// 这个文件做一些中间件的事情
const E = require("express")
const MID = require("./mid/index")

const APP = E()
MID(APP)

APP.all("*", (req, res) => {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Method": "post"
  })
  res.end("")
})

module.exports = APP