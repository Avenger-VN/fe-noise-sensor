import {
  HomeOutlined,
  LogoutOutlined,
  ShopOutlined,
  BarChartOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom"

function SideMenu() {
  const navigate = useNavigate()
  return (
    <div
      className="SideMenu"
      style={{ height: 1000, borderRight: "1px solid rgba(0,0,0,0.15)" }}
    >
      <Menu
        onClick={(item) => {
          //item.key
          navigate(item.key)
        }}
        items={[
          {
            label: "Home",
            icon: <HomeOutlined />,
            key: "/",
          },
          {
            label: "Statistical",
            icon: <BarChartOutlined />,
            key: "/statistical",
          },
          {
            label: "Orders",
            icon: <ShopOutlined />,
            key: "/Orders",
          },
          {
            label: "User",
            icon: <UserOutlined />,
            key: "/User",
          },
          {
            label: "Log Out",
            icon: <LogoutOutlined />,
            key: "/Logout",
            danger: "true",
          },
        ]}
      ></Menu>
    </div>
  )
}

export default SideMenu
