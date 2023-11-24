import React from "react"
import { Table, Button, Popconfirm } from "antd"
import { Link } from "react-router-dom"

const SensorTable = ({ data, handleDelete }) => {
  const columns = [
    // Các cột dữ liệu ở đây
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (space, record) => (
        <div>
          <Link to={`/sensor/${record.name}`}>
            <Button>Edit</Button>
          </Link>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ]

  return <Table columns={columns} dataSource={data} rowKey="id" />
}

export default SensorTable
