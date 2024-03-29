import { Button, Typography } from "antd"
import LocationTable from "../../components/location/LocationTable"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PlusOutlined } from "@ant-design/icons"

import { deleteLocation, getLocations } from "../../api"
import { notification } from "antd"

const { Title } = Typography

const Location = () => {
  const [location, setLocation] = useState([])
  const fetchData = () => {
    getLocations({ limit: 10, page: 1 })
      .then((res) => {
        setLocation(res.data.data.location)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = (record) => {
    deleteLocation(`${record.id}`)
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
