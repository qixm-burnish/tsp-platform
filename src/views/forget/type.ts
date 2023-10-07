export type Step1FormValue = {
  phone?: string
  code?: string
}

export type Step2FormValue = {
  password?: string
  confirmPassword?: string
}

export type Step1EmitType = {
  (event: "next", values: any): void
}

export type Step2EmitType = {
  (event: "back"): void
}
