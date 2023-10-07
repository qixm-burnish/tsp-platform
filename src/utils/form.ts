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

/**
 * 验证统一社会信用代码
 * @param { string } code 统一社会信用代码
 **/
export function validateSocialCreditCode(code) {
  let isPass = true // 是否验证通过，默认通过，为true
  let errorMessage = "" // 错误信息

  // 空值直接返回false
  if (!code) {
    isPass = false
    errorMessage = "请输入统一社会信用代码"
    return {
      isPass,
      errorMessage,
    }
  }

  //18位及正则校验
  const reg = /^\w\w\d{6}\w{9}\w$/
  if (code.length !== 18 || !reg.test(code)) {
    isPass = false
    errorMessage = "不是有效的统一社会信用代码"
    return {
      isPass,
      errorMessage,
    }
  }

  const codeOrigin = "0123456789ABCDEFGHJKLMNPQRTUWXY" // 统一社会信用代码可用字符 不含I、O、S、V、Z
  const weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28] // 统一社会信用代码相对应顺序的加权因子

  let ci // 统一社会信用代码相应顺序的值
  let wi // 统一社会信用代码相应顺序的加权因子
  let total = 0 // 计算结果

  // 数值与加权因子相乘之和
  for (let i = 0; i < code.length - 1; i++) {
    ci = codeOrigin.indexOf(code[i])
    wi = weightedfactors[i]
    total += ci * wi
  }

  // 最后一位校验
  let logicCheckCode = 31 - (total % 31)
  if (logicCheckCode === 31) logicCheckCode = 0
  logicCheckCode = codeOrigin[logicCheckCode]
  if (logicCheckCode !== code.slice(17)) {
    isPass = false
    errorMessage = "不是有效的统一社会信用代码"
  }
  return {
    isPass,
    errorMessage,
  }
}
