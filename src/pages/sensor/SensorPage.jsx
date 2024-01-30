import { Button, Typography } from "antd"
import { useEffect, useState } from "react"
// import SourceDataSensor from "../../components/sensor/SensorControllers"
import SensorTable from "../../components/sensor/SensorTable"
import { Link } from "react-router-dom"
import { PlusOutlined } from "@ant-design/icons"

import { deleteSensor, getSensors } from "../../api"
import { notification } from "antd"


const { Title } = Typography

const Sensor = () => {
  const [sensor, setSensor] = useState([])

  const fecthData = () => {
    getSensors({ limit: 10, page: 1 })
      .then((res) => setSensor(res.data.data.sensor))

      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = (record) => {
    deleteSensor(`${record.id}`)
      .then(() => {
        notification.success({
          message: "Delete success",
          duration: 1,
        })
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
