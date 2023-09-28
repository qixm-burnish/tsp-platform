// https://github.com/VincentSit/ChinaMobilePhoneNumberRegex
export const phoneReg = /^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$/
// 8-20位：至少一个数字、一个字母、一个特殊符号
// export const pwdReg = /^\S*(?=\S{8,20})(?=\S*\d)(?=\S*[A-Za-z])(?=\S*[(),._<>~@!#$%^&*?])\S*$/
// 8-20位：数字、大写字母、小写字母、符号（(),._<>~@!#$%^&*?）的任意三者组合
// export const pwdReg =
//   /(?!^[0-9A-Z]+$)(?!^[0-9a-z]+$)(?!^[0-9(),._<>~@!#$%^&*?]+$)(?!^[A-Za-z]+$)(?!^[A-Z(),._<>~@!#$%^&*?]+$)(?!^[a-z(),._<>~@!#$%^&*?]+$)(^[A-Za-z0-9(),._<>~@!#$%^&*?]{8,20}$)/

export const pwdReg = /^\S{8,20}$/

// 校验URL：支持 http、https、ftp、ftps
export const urlReg = /^(ht|f)(tp|tps):\/\/[a-zA-Z0-9\-.]+\.([a-zA-Z]{2,3})?(\/\S*)?$/

// 邮箱校验
export const mailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
