import { Typography } from "antd"
import LocationTable from "../../LocationMethod/LocationTable"
import { useState } from "react"
import SourceDataLocation from "../../LocationMethod/Controllers"

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
      <LocationTable data={data} handleDelete={handleDelete} />
    </div>
  )
}
export default Location
