import { Button, Form, Input, Typography } from "antd"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const { Title } = Typography

function SensorDataAdd() {
  const [inputData, setInputData] = useState([])
  const navigate = useNavigate()
  function onFinish() {
    axios
      .post("http://localhost:8888/api/v1/create-location", inputData)
      .then(() => {
        alert("Data succes")
        navigate("/alert")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <div className="Title-CreateUser">
        <Title level={3}>Create Sensor Data</Title>
      </div>
      <div className="All-AddUser-Form">
        <Form onFinish={onFinish}>
          <Form.Item
            label="Sensor ID"
            name="sensorID"
            rules={[
              {
                required: true,
                message: "Please enter your SensorID",
              },
              {
                pattern: /^[1-9]\d*$/,
                message: "Latitude must contain only numbers",
              },
            ]}
          >
            <Input
              sensorID="sensorID"
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
              time="time"
              onChange={(e) =>
                setInputData({ ...inputData, time: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Type"
            name="type"
            rules={[
              {
                required: true,
                message: "Please enter your type",
              },
            ]}
          >
            <Input
              type="type"
              onChange={(e) =>
                setInputData({ ...inputData, type: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Location ID"
            name="locationID"
            rules={[
              {
                required: true,
                message: "Please enter your locationID",
              },
              {
                pattern: /^[1-9]\d*$/,
                message: "Latitude must contain only numbers",
              },
            ]}
          >
            <Input
              locationID="locationID"
              onChange={(e) =>
                setInputData({ ...inputData, locationID: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="SerialNo"
            name="serialNo"
            rules={[
              {
                required: true,
                message: "Please enter your serialNo",
              },
            ]}
          >
            <Input
              serialNo="serialNo"
              onChange={(e) =>
                setInputData({ ...inputData, serialNo: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Field"
            name="field"
            rules={[
              {
                required: true,
                message: "Please enter your field",
              },
            ]}
          >
            <Input
              field="field"
              onChange={(e) =>
                setInputData({ ...inputData, field: e.target.value })
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
            <Link to={"/sensordata"}>
              <Button className="AddUser-Form-Btn-Back">Back</Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
export default SensorDataAdd
