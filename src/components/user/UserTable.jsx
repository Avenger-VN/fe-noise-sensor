import React from "react"
import { Table, Button, Popconfirm } from "antd"
import { Link } from "react-router-dom"

const UserTable = ({ data, handleDelete }) => {
  const columns = [
    // Các cột dữ liệu ở đây
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role ID",
      dataIndex: "roleID",
      key: "roleID",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (space, record) => (
        <div>
          <Link to={`/user/${record.id}`}>
            <Button>Edit</Button>
          </Link>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button className="Table-Delete" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ]

  return (
    <div className="Table-Style">
      <Table
        className="Table-with"
        columns={columns}
        dataSource={data}
        rowKey="id"
      />
    </div>
  )
}

export default UserTable
