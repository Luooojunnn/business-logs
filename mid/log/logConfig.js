/**
 * 日志配置，以每小时为维度做文件切割
 */
module.exports = {
  appenders: {
    everything: {
      type: "dateFile",
      filename: `${__dirname}/../../records/log.log`,
      pattern: ".yyyy-MM-dd-hh.log"
    }
  },
  categories: {
    default: {
      appenders: ["everything"],
      level: "debug"
    }
  }
};
