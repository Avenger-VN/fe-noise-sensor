import React from "react"
import { Table, Button, Popconfirm } from "antd"

const UserTable = ({ data, handleDelete }) => {
  const columns = [
    // Các cột dữ liệu ở đây
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
      title: "Location",
      dataIndex: "location",
      key: "location",
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

  return <Table columns={columns} dataSource={data} rowKey="id" />
}

export default UserTable
