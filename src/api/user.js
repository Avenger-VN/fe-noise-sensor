import instance from "./axios"
import qs from "query-string"

export const getUsers = (filter) => {
  return instance.get(`/get-all-user?${qs.stringify(filter)}`)
}
