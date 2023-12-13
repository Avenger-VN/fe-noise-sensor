import { Button, Typography, message } from "antd"
import { useEffect, useState } from "react"
// import SourceDataSensor from "../../components/sensor/SensorControllers"
import SensorTable from "../../components/sensor/SensorTable"
import { Link } from "react-router-dom"
import axios from "axios"
import { PlusOutlined } from "@ant-design/icons"

const { Title } = Typography

const Sensor = () => {
  const [sensor, setSensor] = useState([])

  const fecthData = () => {
    axios
      .get("http://localhost:8888/api/v1/get-all-sensor?limit=10&page=1")
      .then((res) => setSensor(res.data.data.sensor))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fecthData()
  }, [])

  const handleDelete = (record) => {
    axios
      .delete(`http://localhost:8888/api/v1/delete-sensor/${record.id}`)
      .then(() => {
        message.success("Delete success")
        fecthData()
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <div>
        <Title level={3}>Sensor Details</Title>
      </div>
      <div className="All-Add-style">
        <Link to="/sensor/sensor-add">
          <Button type="primary">
            <PlusOutlined />
            Add Sensor
          </Button>
        </Link>
      </div>
      <SensorTable data={sensor} handleDelete={handleDelete} />
    </div>
  )
}
export default Sensor
