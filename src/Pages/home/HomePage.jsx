import { Calendar, Card, Space, Statistic, Table, Typography } from "antd"
import onPanelChange from "../../components/home/HomeCalendar"
import data from "../../components/home/HomeControllers"
import columns from "../../components/home/HomeModel"
import {
  BarChartOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Drawer } from "antd"
import { useState } from "react"
const { Text } = Typography

function Home() {
  const [drawerVisible, setDrawerVisible] = useState(false)

  const showDrawer = () => {
    setDrawerVisible(true)
  }

  const onCloseDrawer = () => {
    setDrawerVisible(false)
  }
  const handleStatisticalClick = (title) => {
    if (title === "Notification") {
      showDrawer()
    } else {
      console.log("abc")
    }
  }
  return (
    <div>
      <div className="Home-Start">
        <div className="Home-Start-Content">
          <Typography.Title level={4}>Noise Pollution</Typography.Title>
          <Space direction="horizontal">
            <Statistical
              icon={
                <BarChartOutlined
                  style={{
                    fontSize: 24,
                    padding: 8,
                    borderRadius: 20,
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                  }}
                />
              }
              title="Statistical"
              value={2000}
            />
            <Statistical
              icon={
                <NotificationOutlined
                  style={{
                    fontSize: 24,
                    padding: 8,
                    borderRadius: 20,
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                  }}
                />
              }
              title="Notification"
              value={1234}
              onClick={() => handleStatisticalClick("Notification")}
            />
            <Statistical
              icon={
                <BarChartOutlined
                  style={{
                    fontSize: 24,
                    padding: 8,
                    borderRadius: 20,
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                  }}
                />
              }
              title="Statistical"
              value={560}
            />
            <Statistical
              icon={
                <UserOutlined
                  style={{
                    fontSize: 24,
                    padding: 8,
                    borderRadius: 20,
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                  }}
                />
              }
              title="User"
              value={4}
            />
          </Space>
          <div>
            <div>
              <Typography.Title level={5}>Noise levels:</Typography.Title>
            </div>
            <div>
              <Card>
                <div>
                  <ul className="Home-Warning-ul">
                    <li>
                      <div>
                        <Text strong>0-70dB: Normal</Text>
                      </div>
                    </li>
                    <li>
                      <div>
                        <Text strong>70-85dB: Sensitive</Text>
                      </div>
                    </li>
                    <li>
                      <div>
                        <Text strong>85-120dB: Dangerous</Text>
                      </div>
                    </li>
                    <li>
                      <div>
                        <Text strong>120-NNdB: Extremely dangerous</Text>
                      </div>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="Home-calendar">
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      </div>
      <div className="Home-table">
        <div className="Home-table-content">
          <div>
            <Table dataSource={data} columns={columns} value="20" />
          </div>
        </div>
      </div>
      <Drawer
        title="Notification"
        placement="right"
        onClose={onCloseDrawer}
        visible={drawerVisible}
      >
        <Typography.Title level={4}>To day</Typography.Title>
        <p>12:05 Sensitive</p>
        <p>13:00 Dangerous</p>
        <p>14:20 Extremely dangerous</p>
        <p>15:10 Sensitive</p>
        <p>16:30 Dangerous</p>
        <p>16:50 Extremely dangerous</p>
        <p>17:05 Sensitive</p>
        <p>18:00 Dangerous</p>
        <p>22:15 Extremely dangerous</p>
        <p>23:05 Sensitive</p>
        <p>23:10 Dangerous</p>
        <p>23:40 Extremely dangerous</p>
      </Drawer>
    </div>
  )
}

function Statistical({ title, value, icon, onClick }) {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }}>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  )
}

export default Home
