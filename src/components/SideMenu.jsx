import {
  HomeOutlined,
  LogoutOutlined,
  ShopOutlined,
  BarChartOutlined,
  UserOutlined,
  AimOutlined,
  DatabaseOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom"

function SideMenu() {
  const navigate = useNavigate()
  return (
    <div
      className="SideMenu"
      style={{ height: 1400, borderRight: "1px solid rgba(0,0,0,0.15)" }}
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
            key: "/orders",
          },
          {
            label: "Location",
            icon: <AimOutlined />,
            key: "/location",
          },
          {
            label: "Sensor",
            icon: <DatabaseOutlined />,
            key: "/sensor",
          },
          {
            label: "User",
            icon: <UserOutlined />,
            key: "/user",
          },
          {
            label: "Log Out",
            icon: <LogoutOutlined />,
            key: "/logout",
            danger: "true",
          },
        ]}
      ></Menu>
    </div>
  )
}

export default SideMenu
