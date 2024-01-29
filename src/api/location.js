import instance from "./axios"
import qs from "query-string"

export const getLocations = (filter) => {
  return instance.get(`/get-all-location?${qs.stringify(filter)}`)
}

export const createLocation = (location) => {
  return instance.post(`/create-location`, location)
}
