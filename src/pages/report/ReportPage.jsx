import { Typography } from "antd"
import ReportTable from "../../components/report/ReportTable"

const { Title } = Typography
const Report = () => {
  return (
    <div>
      <div>
        <Title level={3}>Report Monitor</Title>
      </div>
      <div>
        <ReportTable />
      </div>
    </div>
  )
}
export default Report
