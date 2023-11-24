import { Button, Table, Typography } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Popconfirm } from "antd"
import { message } from "antd"
function Orders() {
  const [dataSource, setDataSource] = useState([])
  const handleDelete = (record) => {
    const filteredData = dataSource.filter((item) => item !== record)
    setDataSource(filteredData)
    message.success("Click on Yes")
  }
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "UserName",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (space, record) => (
        <Popconfirm
          title="Are you sure to delete this task?"
          onConfirm={() => handleDelete(record)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ]
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDataSource(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      <Typography.Text>Orders</Typography.Text>
      <Link to="/orders/order-add">
        <Button>Add User</Button>
      </Link>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default Orders
