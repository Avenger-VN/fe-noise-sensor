import { Badge, Space, Typography } from "antd";
import {BellFilled, MailOutlined} from "@ant-design/icons"

function AppHeader(){
    return <div className="AppHeader">
            <Typography.Title level={2} style={{paddingLeft:14}} >Noise Pollution</Typography.Title>
            <Space>
                <Badge count='4'>
                    <MailOutlined style={{fontSize:24}} />
                </Badge>
                <Badge count='11'>
                    <BellFilled style={{fontSize:24}} />
                </Badge>
            </Space>
            </div>
}

export default AppHeader;