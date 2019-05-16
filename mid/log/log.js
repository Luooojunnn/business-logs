/**
 * 日志中间件
 */
// const FS = require("fs");
let log4js = require("log4js")
let logConfig = require("./logConfig")

log4js.configure(logConfig)
let logger = log4js.getLogger()

function log(req, res, next) {
  if (req.method.toLowerCase() === "post") {
    console.log(`今日日志条数${
      ++log.i
    }`)
    let s = "";
    req.on("data", chunk => {
      s += chunk.toString();
    });
    req.on("end", async () => {
      logger.info(s.toString())
    });
  }
  next();
}
log.i = 0

module.exports = log;
