import { Button, Typography } from "antd"
import { useState } from "react"
import SourceDataSensor from "../../allMethodPages/sensorMethod/SensorControllers"
import SensorTable from "../../allMethodPages/sensorMethod/SensorTable"
import { Link } from "react-router-dom"

const { Title } = Typography

const Sensor = () => {
  const [data, setData] = useState(SourceDataSensor)

  const handleDelete = (record) => {
    const filteredData = data.filter((item) => item !== record)
    setData(filteredData)
  }
  return (
    <div>
      <div>
        <Title level={3}>Sensor</Title>
      </div>
      <div className="All-Add-style">
        <Link to="/sensor/sensor-add">
          <Button>Add Sensor</Button>
        </Link>
      </div>
      <div style={{ width: "600px" }}>
        <SensorTable data={data} handleDelete={handleDelete} />
      </div>
    </div>
  )
}
export default Sensor
