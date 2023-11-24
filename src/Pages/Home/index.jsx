import { Calendar, Card, Space, Statistic, Table, Typography } from "antd"
import onPanelChange from "../../AllMethodPages/HomeMethod/Calendar/calendar"
import data from "../../AllMethodPages/HomeMethod/Tables/userController"
import columns from "../../AllMethodPages/HomeMethod/Tables/userModel"
import {
  BarChartOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons"
const { Text } = Typography

function Home() {
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
    </div>
  )
}

function Statistical({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  )
}

export default Home
