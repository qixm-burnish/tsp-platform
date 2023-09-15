import { phoneReg } from "./regex"

export function validatePhone(_, value, callback) {
  if (!value || value.trim() === "") {
    callback(new Error("请输入手机号码"))
  } else if (!phoneReg.test(value.trim())) {
    callback(new Error("请输入有效的手机号码"))
  } else {
    callback()
  }
}
