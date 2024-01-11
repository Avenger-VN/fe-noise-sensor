import { Route, Routes } from "react-router-dom"
import Home from "../../src/pages/home/HomePage"
import Statistical from "../../src/pages/statistical/StatiscalPage"
import User from "../../src/pages/user/UserPage"
import UserAdd from "../../src/pages/user/UserPageAdd"
import UserUpdate from "../../src/pages/user/UserPageUpdate"
import Location from "../../src/pages/location/LocationPage"
import Sensor from "../../src/pages/sensor/SensorPage"
import SensorAdd from "../../src/pages/sensor/SensorPageAdd"
import SensorUpdate from "../../src/pages/sensor/SensorPageUpdate"
import LocationAdd from "../../src/pages/location/LocationPageAdd"
import LocationUpdate from "../../src/pages/location/LocationPageUpdate"
import Alert from "../../src/pages/alert/AlertPage"
import AlertAdd from "../../src/pages/alert/AlertPageAdd"
import SensorData from "../../src/pages/sensorData/SensorDataPage"
import SensorDataAdd from "../../src/pages/sensorData/SensorDataPageAdd"
import AlertUpdate from "../../src/pages/alert/AlertPageUpdate"
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
