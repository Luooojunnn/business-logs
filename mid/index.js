/**
 * 中间件文件
 * 接收所有post的请求，其中post来的数据应该包含要统计的信息
 */
const URL = require("url");
// const PATH = require("path");

let log = require("./log/log")
let midFc = app => {
  /**
   * 写入信息中间件
   */
  app.use(log);

};

module.exports = midFc;
