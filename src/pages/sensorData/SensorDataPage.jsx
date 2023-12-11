import { Button, Typography } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { message } from "antd"
import SensorDataTable from "../../components/sensorData/SensorDataTable"
import { PlusOutlined } from "@ant-design/icons"

const { Title } = Typography

const SensorData = () => {
  const [sensordata, setsensordata] = useState([])

  const fetchData = () => {
    axios
      .get("")
      .then((res) => {
        setsensordata(res.data.data.location)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = (record) => {
    axios
      .delete(`http://localhost:3030/locations/${record.id}`)
      .then(() => {
        message.success("Delete success")
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
