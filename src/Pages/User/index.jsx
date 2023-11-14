import React, { useState } from "react"
import { Button } from "antd"
import UserTable from "../../UserMethod/UserTable"
import { Link } from "react-router-dom"

const User = () => {
  const [data, setData] = useState([])

  const handleDelete = (record) => {
    const filteredData = data.filter((item) => item !== record)
    setData(filteredData)
  }

  return (
    <div>
      <div style={{ float: "right", padding: "20px 20px 20px 0px" }}>
        <Link to="/user/User-add">
          <Button>Add User</Button>
        </Link>
      </div>
      <UserTable data={data} handleDelete={handleDelete} />
    </div>
  )
}

export default User
