import {
  HomeOutlined,
  LogoutOutlined,
  BarChartOutlined,
  UserOutlined,
  AimOutlined,
  DatabaseOutlined,
  NotificationOutlined,
  LineChartOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom"

function SideMenu() {
  const navigate = useNavigate()
  return (
    <div className="SideMenu">
      <Menu
        style={{ borderInlineEnd: "none" }}
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
            label: "Report",
            icon: <LineChartOutlined />,
            key: "/report",
          },
          {
            label: "Statistical",
            icon: <BarChartOutlined />,
            key: "/statistical",
          },
          {
            label: "Location",
            icon: <AimOutlined />,
            key: "/location",
          },
          {
            label: "Alert",
            icon: <NotificationOutlined />,
            key: "/alert",
          },
          {
            label: "Sensor",
            icon: <DatabaseOutlined />,
            key: "/sensor",
          },
          {
            label: "Sensor Data",
            icon: <DatabaseOutlined />,
            key: "/sensorData",
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
