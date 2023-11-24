import { MailOutlined, BellFilled } from "@ant-design/icons"
import { Typography, Space, Badge } from "antd"

function AppHeader() {
  return (
    <div className="AppHeader">
      <Typography.Title level={2} style={{ paddingLeft: 14 }}>
        Noise Pollution
      </Typography.Title>
      <Space>
        <Badge count="4">
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count="11">
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  )
}

export default AppHeader
