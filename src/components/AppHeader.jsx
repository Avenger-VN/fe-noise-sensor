import React, { useState, useRef, useEffect } from "react"
import {
  MailOutlined,
  BellFilled,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons"
import { Avatar, Typography, Space, Badge } from "antd"
const { Text } = Typography

function AppHeader() {
  const [openUser, setOpenUser] = useState(false)
  const user = ["Setting", "Profile", "LogOut"]
  const dropdownRef = useRef(null)

  const handler = () => setOpenUser((prev) => !prev)

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenUser(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="AppHeader">
      <Typography.Title level={2} style={{ margin: 0 }}>
        Noise Monitor
      </Typography.Title>
      <Space>
        <Badge count="4">
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count="11">
          <BellFilled style={{ fontSize: 24, marginLeft: "10px" }} />
        </Badge>
        <div ref={dropdownRef}>
          <Avatar
            className="header-avatar"
            size={30}
            icon={<UserOutlined />}
            onClick={handler}
          />
          <Text type="secondary" className="header-name" onClick={handler}>
            Bùi Thanh Thịnh
          </Text>
          <CaretDownOutlined className="header-icon" onClick={handler} />
          {openUser && (
            <div className="dropdown-profile">
              <ul>
                {user.map((item) => (
                  <li key={item}>
                    <a
                      href="/"
                      onClick={handler}
                      style={{ color: item === "LogOut" ? "#ff4d4f" : "" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Space>
    </div>
  )
}

export default AppHeader
