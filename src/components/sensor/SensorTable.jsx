import React from "react"
import { Table, Button, Popconfirm } from "antd"
import { Link } from "react-router-dom"

const SensorTable = ({ data, handleDelete }) => {
  const columns = [
    // Các cột dữ liệu ở đây
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
          <Link to={`/sensor/${record.id}`}>
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

export default SensorTable
