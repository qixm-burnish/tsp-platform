import { UploadRequestOptions } from "element-plus"
import { v5 as uuid5 } from "uuid"
import request from "./request"

export async function customElementUploadRequest(options: UploadRequestOptions) {
  return ossFileUpload(options.file)
}

export async function ossFileUpload(file: File) {
  // generate unique file name
  const uniqueId = uuid5()
  let fileName = file.name ?? ""
  const replacer = (match, p1, p2, p3) => p1 + "(" + uniqueId + ")" + p2 + p3
  fileName = fileName.replace(/\*(\.\w)$/, replacer)

  // const data = await oss_upload_url_v1_other_common_oss_upload_url_get({
  //   filepath: fileName,
  // })

  // const formData = new FormData()
  // formData.append("file", file)
  // await request.post(data.url, { data: formData })

  return fileName
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
