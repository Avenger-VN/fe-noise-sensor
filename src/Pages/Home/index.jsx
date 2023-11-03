import { Calendar,Card,Space, Statistic, Table, Typography } from "antd";
import onPanelChange from "../../HomeMethod/Calendar/calendar";
import data from "../../HomeMethod/Tables/userController";
import columns from "../../HomeMethod/Tables/userModel";
import { BarChartOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";

function Home(){
    return <div>
        <div className="Home-Start">
            <div className="Home-Start-Content">
                <Typography.Title level={4}>Noise Pollution</Typography.Title>
                <Space direction="horizontal">
                    <Statistical 
                    icon={<BarChartOutlined style={{
                        fontSize:24,
                        padding:8,
                        borderRadius:20,
                        color:"green",
                        backgroundColor:"rgba(0,255,0,0.25)"
                    }} />} 
                    title="Statistical" 
                    value={2000}
                    />
                    <Statistical 
                    icon={<NotificationOutlined  style={{
                        fontSize:24,
                        padding:8,
                        borderRadius:20,
                        color:"green",
                        backgroundColor:"rgba(0,255,0,0.25)"
                    }} />} 
                    title="Notification" 
                    value={1234}
                    />
                    <Statistical icon={<BarChartOutlined style={{
                        fontSize:24,
                        padding:8,
                        borderRadius:20,
                        color:"green",
                        backgroundColor:"rgba(0,255,0,0.25)"
                    }} />} 
                    title="Statistical" 
                    value={560}
                    />
                    <Statistical icon={<UserOutlined style={{
                        fontSize:24,
                        padding:8,
                        borderRadius:20,
                        color:"green",
                        backgroundColor:"rgba(0,255,0,0.25)"
                    }} />} 
                    title="User" 
                    value={4}
                    />
                    
                </Space>

            </div>
            <div className="Home-calendar">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
        </div>
        <div className="Home-table">
            <div className="Home-table-content">
                <div><Table dataSource={data}
                            columns={columns} 
                    />
                </div>
            </div>
        </div>
        
    </div>
}


function Statistical({title,value,icon}){
    return (
        <Card >
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value}/>
            </Space>
        </Card> 
    )
}

export default Home;