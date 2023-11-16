import { Route, Routes } from "react-router-dom"
import Home from "../../Pages/Home"
import Statistical from "../../Pages/Statistical"
import Orders from "../../Pages/Orders"
import User from "../../Pages/User"
import UserAdd from "../../Pages/UserAll/UserAdd"
import UserUpdate from "../../Pages/UserAll/UserUpdate"
import Location from "../../Pages/Location"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/statistical" element={<Statistical />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/user/User-add" element={<UserAdd />}></Route>
      <Route path="/user/:id" element={<UserUpdate />}></Route>
      <Route path="/location" element={<Location />}></Route>
      <Route path="/sensor" element={<Location />}></Route>
    </Routes>
  )
}

export default AppRoutes
