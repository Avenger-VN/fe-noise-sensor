import { Button, Form, Input, Typography } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link, useParams } from "react-router-dom"
import { getAlert, update } from "../../api/path"
import { notification } from "antd"
const { Title } = Typography

function AlertUpdate() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({})
  useEffect(() => {
    getAlert(id)
      .then((res) => {
        setInputData(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [id])
  function onUpdate() {
    update("update-alert", inputData)
      .then(() => {
        notification.success({
          message: "Update success",
          duration: 1,
          onClose: () => {
            navigate("/alert")
          },
        })
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <div className="Title-CreateUser">
        <Title level={3}>Update Alert</Title>
      </div>
      <div className="All-AddUser-Form">
        <Form onFinish={onUpdate}>
          <Form.Item
            label="ID"
            rules={[
              {
                required: true,
                message: "Please enter your latitude",
              },
            ]}
          >
            <Input
              name="id"
              value={inputData.id}
              className="Modal-input"
              disabled
            />
          </Form.Item>
          <Form.Item
            label="Sensor ID"
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
              className="Modal-input"
              onChange={(e) =>
                setInputData({ ...inputData, sensorID: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Time"
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
              className="Modal-input"
              onChange={(e) =>
                setInputData({ ...inputData, time: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Description"
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
              className="Modal-input"
              onChange={(e) =>
                setInputData({ ...inputData, description: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Name"
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
              className="Modal-input"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
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
