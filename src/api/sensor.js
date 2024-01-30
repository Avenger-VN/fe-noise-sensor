import instance from "./axios"
import qs from "query-string"

export const getSensors = (filter) => {
  return instance.get(`/get-all-sensor?${qs.stringify(filter)}`)
}

export const createSensor = (sensor) => {
  return instance.post(`/create-sensor`, sensor)
}
