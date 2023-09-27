import { defs as userCenterDefs, userCenter } from "./userCenter"

;(window as any).defs = {
  userCenter: userCenterDefs,
}
;(window as any).API = {
  userCenter,
}
