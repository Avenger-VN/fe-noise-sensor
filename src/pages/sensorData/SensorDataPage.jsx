import { Button, Typography } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SensorDataTable from "../../components/sensorData/SensorDataTable"
import { PlusOutlined } from "@ant-design/icons"

import { deleteSensorData, getSensorDatas } from "../../api"
import { notification } from "antd"

const { Title } = Typography

const SensorData = () => {
  const [sensordata, setsensordata] = useState([])

  const fetchData = () => {
    getSensorDatas({ limit: 10, page: 1 })
      .then((res) => setsensordata(res.data.data.sensorData))

      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = (record) => {
    deleteSensorData(`${record.id}`)
      .then(() => {
        notification.success({
          message: "Delete success",
          duration: 1,
        })
        fetchData()
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <div>
        <Title level={3}>Sensor Data Details</Title>
      </div>
      <div className="All-Add-style">
        <Link to="/sensordata/sensordata-add">
          <Button type="primary">
            <PlusOutlined />
            Add Sensor Data
          </Button>
        </Link>
      </div>
      <SensorDataTable data={sensordata} handleDelete={handleDelete} />
    </div>
  )
}

export default SensorData
