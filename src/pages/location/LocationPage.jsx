import { Button, Typography } from "antd"
import LocationTable from "../../components/location/LocationTable"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { message } from "antd"
import { PlusOutlined } from "@ant-design/icons"

const { Title } = Typography

const Location = () => {
  const [location, setLocation] = useState([])
  const fetchData = () => {
    axios
      .get("http://localhost:8888/api/v1/get-all-location?limit=10&page=1")
      .then((res) => {
        setLocation(res.data.data.location)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = (record) => {
    axios
      .delete(`http://localhost:8888/api/v1/delete-location/${record.id}`)
      .then(() => {
        message.success("Delete success")
        fetchData()
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <div>
        <Title level={3}>Location Details</Title>
      </div>
      <div>
        <Link className="All-Add-style" to="/location/location-add">
          <Button type="primary">
            <PlusOutlined />
            Add Location
          </Button>
        </Link>
      </div>
      <LocationTable data={location} handleDelete={handleDelete} />
    </div>
  )
}

export default Location
