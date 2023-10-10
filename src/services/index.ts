import { defs as userCenterDefs, userCenter } from "./userCenter"

import { defs as vehicleDataCenterDefs, vehicleDataCenter } from "./vehicleDataCenter"

;(window as any).defs = {
  userCenter: userCenterDefs,
  vehicleDataCenter: vehicleDataCenterDefs,
}
;(window as any).API = {
  userCenter,
  vehicleDataCenter,
}
