import React, { useEffect, useState } from "react"
import { Button } from "antd"
import UserTable from "../../components/user/UserTable"
import { Link } from "react-router-dom"
import { Typography } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import axios from "axios"

const { Title } = Typography
const User = () => {
  const [user, setUser] = useState([])
  const fetchData = () => {
    axios
      .get("http://localhost:8888/api/v1/get-all-user?limit=10&page=1")
      .then((res) => {
        setUser(res.data.data.users)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])
  const handleDelete = (record) => {
    const filteredData = user.filter((item) => item.id !== record.id)
    setUser(filteredData)
  }

  return (
    <div>
      <div>
        <Title level={3}>User Details</Title>
      </div>
      <div className="All-Add-style">
        <Link to="/user/user-add">
          <Button type="primary">
            <PlusOutlined />
            Add User
          </Button>
        </Link>
      </div>
      <UserTable data={user} handleDelete={handleDelete} />
    </div>
  )
}

export default User
