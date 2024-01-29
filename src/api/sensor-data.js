import instance from "./axios"
import qs from "query-string"

export const getSensorData = (filter) => {
  return instance.get(`/get-all-sensor-data?${qs.stringify(filter)}`)
}
