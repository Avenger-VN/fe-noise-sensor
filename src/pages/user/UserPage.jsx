import React, { useEffect, useState } from "react"
import { Button } from "antd"
import UserTable from "../../components/user/UserTable"
import { Link } from "react-router-dom"
import { Typography } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { deleteUser, getUsers } from "../../api"
import { notification } from "antd"

const { Title } = Typography
export default function User() {
  const [user, setUser] = useState([])

  const fetchData = () => {
    getUsers({ limit: 10, page: 1 })
      .then((res) => {
        setUser(res.data.data.users)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])
  const handleDelete = (record) => {
    deleteUser(`${record.id}`).then(() => {
      notification.success({
        message: "Delete success",
        duration: 1,
      })
      fetchData()
    })
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
