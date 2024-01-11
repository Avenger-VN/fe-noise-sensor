import { Route, Routes } from "react-router-dom"
import Home from "../../src/Pages/home/HomePage"
import Statistical from "../../src/Pages/statistical/StatiscalPage"
import User from "../../src/Pages/user/UserPage"
import UserAdd from "../../src/Pages/user/UserPageAdd"
import UserUpdate from "../../src/Pages/user/UserPageUpdate"
import Location from "../../src/Pages/location/LocationPage"
import Sensor from "../../src/Pages/sensor/SensorPage"
import SensorAdd from "../../src/Pages/sensor/SensorPageAdd"
import SensorUpdate from "../../src/Pages/sensor/SensorPageUpdate"
import LocationAdd from "../../src/Pages/location/LocationPageAdd"
import LocationUpdate from "../../src/Pages/location/LocationPageUpdate"
import Alert from "../../src/Pages/alert/AlertPage"
import AlertAdd from "../../src/Pages/alert/AlertPageAdd"
import SensorData from "../../src/Pages/sensorData/SensorDataPage"
import SensorDataAdd from "../../src/Pages/sensorData/SensorDataPageAdd"
import AlertUpdate from "../../src/Pages/alert/AlertPageUpdate"
import SensorDataPageUpdate from "../pages/sensorData/SensorDataPageUpdate"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/statistical" element={<Statistical />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/user/user-add" element={<UserAdd />}></Route>
      <Route path="/user/:id" element={<UserUpdate />}></Route>
      <Route path="/location" element={<Location />}></Route>
      <Route path="/location/location-add" element={<LocationAdd />}></Route>
      <Route path="/location/:id" element={<LocationUpdate />}></Route>
      <Route path="/alert" element={<Alert />}></Route>
      <Route path="/alert/:id" element={<AlertUpdate />}></Route>
      <Route path="/alert/alert-add" element={<AlertAdd />}></Route>
      <Route path="/sensor" element={<Sensor />}></Route>
      <Route path="/sensor/sensor-add" element={<SensorAdd />}></Route>
      <Route path="/sensor/:id" element={<SensorUpdate />}></Route>
      <Route path="/sensordata" element={<SensorData />}></Route>
      <Route path="/sensordata/:id" element={<SensorDataPageUpdate />}></Route>

      <Route
        path="/sensordata/sensordata-add"
        element={<SensorDataAdd />}
      ></Route>
    </Routes>
  )
}

export default AppRoutes
