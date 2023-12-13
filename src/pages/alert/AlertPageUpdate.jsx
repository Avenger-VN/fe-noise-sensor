import { Button, Form, Input, Typography } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
const { Title } = Typography

function AlertUpdate() {
  const { id } = useParams()
  const [inputData, setInputData] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:8888/api/v1/get-all-alert?limit=10&page=1/${id}`)
      .then((res) => {
        setInputData(res.data.data.inputData)
      })
      .catch((err) => console.log(err))
  }, [id])
  function onFinish() {}

  return (
    <div>
      <div className="Title-CreateUser">
        <Title level={3}>Create Alert</Title>
      </div>
      <div className="All-AddUser-Form">
        <Form onFinish={onFinish}>
          <Form.Item
            label="Sensor ID"
            name="sensorID"
            rules={[
              {
                required: true,
                message: "Please enter your sensorID",
              },
              {
                pattern: /^[1-9]\d*$/,
                message: "Latitude must contain only numbers",
              },
            ]}
          >
            <Input
              name="sensorID"
              value={inputData.sensorID}
              onChange={(e) =>
                setInputData({ ...inputData, sensorID: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Time"
            name="time"
            rules={[
              {
                required: true,
                message: "Please enter your time",
              },
            ]}
          >
            <Input
              name="time"
              value={inputData.time}
              onChange={(e) =>
                setInputData({ ...inputData, time: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter your description",
              },
            ]}
          >
            <Input
              name="description"
              value={inputData.description}
              onChange={(e) =>
                setInputData({ ...inputData, description: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your description",
              },
            ]}
          >
            <Input
              name="name"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <div className="Btn-Back-Save">
            <Button
              className="AddUser-Form-Btn-Save"
              type="primary"
              htmlType="submit"
            >
              Save
            </Button>
            <Link to={"/alert"}>
              <Button className="AddUser-Form-Btn-Back">Back</Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
export default AlertUpdate
