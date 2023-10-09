export type ExposeType = {
  refresh: CallableFunction
}
export type EmitType = {
  (event: "change", key: string): void
}
