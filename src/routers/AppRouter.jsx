import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/HomePage"
import Statistical from "../pages/statistical/StatiscalPage"
import ReportPage from "../pages/report/ReportPage"
import User from "../pages/user/UserPage"
import UserAdd from "../pages/user/UserPageAdd"
import UserUpdate from "../pages/user/UserPageUpdate"
import Location from "../pages/location/LocationPage"
import Sensor from "../pages/sensor/SensorPage"
import SensorAdd from "../pages/sensor/SensorPageAdd"
import SensorUpdate from "../pages/sensor/SensorPageUpdate"
import LocationAdd from "../pages/location/LocationPageAdd"
import LocationUpdate from "../pages/location/LocationPageUpdate"
import Alert from "../pages/alert/AlertPage"
import AlertAdd from "../pages/alert/AlertPageAdd"
import SensorData from "../pages/sensorData/SensorDataPage"
import SensorDataAdd from "../pages/sensorData/SensorDataPageAdd"
import AlertUpdate from "../pages/alert/AlertPageUpdate"
import SensorDataPageUpdate from "../pages/sensorData/SensorDataPageUpdate"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/report" element={<ReportPage />}></Route>
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
