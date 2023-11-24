import React, { useState } from "react"
import { Button } from "antd"
import UserTable from "../../AllMethodPages/UserMethod/UserTable"
import { Link } from "react-router-dom"
import SourceDataUser from "../../AllMethodPages/UserMethod/Controllers"
import { Typography } from "antd"

const { Title } = Typography
const User = () => {
  const [data, setData] = useState(SourceDataUser)

  const handleDelete = (record) => {
    const filteredData = data.filter((item) => item.id !== record.id)
    setData(filteredData)
  }

  return (
    <div>
      <div>
        <Title level={3}>User Details</Title>
      </div>
      <div className="All-Add-style">
        <Link to="/user/user-add">
          <Button>Add User</Button>
        </Link>
      </div>
      <UserTable data={data} handleDelete={handleDelete} />
    </div>
  )
}

export default User
