/**
 * 获取本机ip
 */
let os = require("os")

let getIPAdress = () => {
  let netFace = os.networkInterfaces()
  let addressObj = {}
  for(let n in netFace) {
    let inFace = netFace[n]
    addressObj = inFace.find(v => {
      if (v.family === "IPv4" && v.address !== "127.0.0.1") {
        return true
      }
    })
    if (addressObj) {
      break;
    }
  }
  return addressObj.address
}

 module.exports = getIPAdress