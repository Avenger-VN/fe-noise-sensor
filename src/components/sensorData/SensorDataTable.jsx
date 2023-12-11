import React from "react"
import { Table, Button, Popconfirm } from "antd"
import { Link } from "react-router-dom"

const SensorDataTable = ({ data, handleDelete }) => {
  const columns = [
    // Các cột dữ liệu ở đây
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
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Location ID",
      dataIndex: "locationID",
      key: "locationID",
    },
    {
      title: "SerialNo",
      dataIndex: "serialNo",
      key: "serialNo",
    },
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (space, record) => (
        <div>
          <div>
            <Link to={`/location/${record.id}`}>
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

export default SensorDataTable
