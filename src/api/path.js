import instance from "./axios"
import qs from "query-string"
//update all
export const update = (change, state) => {
  return instance.put(`/${change}`, state)
}

// User
export const getUsers = (filter) => {
  return instance.get(`/get-all-user?${qs.stringify(filter)}`)
}
export const deleteUser = (id) => {
  return instance.delete(`/delete-user/${id}`)
}
export const getUser = (id) => {
  return instance.get(`/get-user/${id}`)
}
export const createUser = (change, state) => {
  return instance.post(`/${change}`, state)
}

// Location
export const getLocations = (filter) => {
  return instance.get(`/get-all-location?${qs.stringify(filter)}`)
}
export const deleteLocation = (id) => {
  return instance.delete(`/delete-location/${id}`)
}
export const getLocation = (id) => {
  return instance.get(`/get-location/${id}`)
}
export const createLocation = (change, state) => {
  return instance.post(`/${change}`, state)
}
// Sensor
export const getSensors = (filter) => {
  return instance.get(`/get-all-sensor?${qs.stringify(filter)}`)
}
export const deleteSensor = (id) => {
  return instance.delete(`/delete-sensor/${id}`)
}
export const getSensor = (id) => {
  return instance.get(`/get-sensor/${id}`)
}
export const createSensor = (change, state) => {
  return instance.post(`/${change}`, state)
}
// Alert
export const getAlerts = (filter) => {
  return instance.get(`/get-all-alert?${qs.stringify(filter)}`)
}
export const deleteAlert = (id) => {
  return instance.delete(`/delete-alert/${id}`)
}
export const getAlert = (id) => {
  return instance.get(`/get-alert/${id}`)
}
export const createAlert = (change, state) => {
  return instance.post(`/${change}`, state)
}

// Sensor Data
export const getSensorDatas = (filter) => {
  return instance.get(`/get-all-sensor-data?${qs.stringify(filter)}`)
}
export const deleteSensorData = (id) => {
  return instance.delete(`/delete-sensor-data/${id}`)
}
export const getSensorData = (id) => {
  return instance.get(`/get-sensor-data/${id}`)
}
export const createSensorData = (change, state) => {
  return instance.post(`/${change}`, state)
}
