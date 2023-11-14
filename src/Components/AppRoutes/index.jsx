import { Route, Routes } from "react-router-dom"
import Home from "../../Pages/Home"
import Statistical from "../../Pages/Statistical"
import Orders from "../../Pages/Orders"
import User from "../../Pages/User"
import UserAdd from "../../Pages/UserAdd"
import OrderAdd from "../../Pages/OrderAdd"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/statistical" element={<Statistical />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/orders/order-add" element={<OrderAdd />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/user/User-add" element={<UserAdd />}></Route>
    </Routes>
  )
}

export default AppRoutes
