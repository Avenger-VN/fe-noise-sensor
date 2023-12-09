import React from "react"
import { Table, Button, Popconfirm } from "antd"
import { Link } from "react-router-dom"

const AlertTable = ({ data, handleDelete }) => {
  const columns = [
    // Các cột dữ liệu ở đây
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      // sorter: (a, b) => a.id - b.id,
      // defaultSortOrder: "ascend",
    },
    {
      title: "Sensor ID",
      dataIndex: "sensorID",
      key: "sensorID",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (space, record) => (
        <div>
          <div>
            <Link to={`/alert/${record.id}`}>
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

export default AlertTable
