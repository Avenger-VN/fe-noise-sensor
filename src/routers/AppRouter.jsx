import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/HomePage"
import Statistical from "../pages/statistical/StatiscalPage"
import Orders from "../pages/orders/OrderPage"
import User from "../pages/user/UserPage"
import UserAdd from "../pages/user/UserPageAdd"
import UserUpdate from "../pages/user/UserPageUpdate"
import Location from "../pages/location/LocationPage"
import Sensor from "../pages/sensor/SensorPage"
import SensorAdd from "../pages/sensor/SensorPageAdd"
import SensorUpdate from "../pages/sensor/SensorPageUpdate"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/statistical" element={<Statistical />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/user/user-add" element={<UserAdd />}></Route>
      <Route path="/user/:id" element={<UserUpdate />}></Route>
      <Route path="/location" element={<Location />}></Route>
      <Route path="/sensor" element={<Sensor />}></Route>
      <Route path="/sensor/sensor-add" element={<SensorAdd />}></Route>
      <Route path="/sensor/:name" element={<SensorUpdate />}></Route>
    </Routes>
  )
}

export default AppRoutes
