import { Typography } from "antd"
import LocationTable from "../../allMethodPages/locationMethod/LocationTable"
import { useState } from "react"
import SourceDataLocation from "../../allMethodPages/locationMethod/LocationControllers"

const { Title } = Typography
const Location = () => {
  const [data, setData] = useState(SourceDataLocation)

  const handleDelete = (record) => {
    const filteredData = data.filter((item) => item.id !== record.id)
    setData(filteredData)
  }
  return (
    <div>
      <div>
        <Title level={3}>Location</Title>
      </div>
      <div>
        <LocationTable data={data} handleDelete={handleDelete} />
      </div>
    </div>
  )
}
export default Location
