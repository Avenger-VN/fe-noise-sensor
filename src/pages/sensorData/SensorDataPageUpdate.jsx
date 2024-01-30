import { useEffect, useState } from "react"
import { Button, Form, Input, Typography } from "antd"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getSensorData, update } from "../../api/path"
import { notification } from "antd"
const { Title } = Typography
const SensorDataPageUpdate = () => {
  const [sensorData, setSensorData] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    getSensorData(id)
      .then((res) => {
        setSensorData(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [id])
  function onUpdate() {
    update("update-sensor-data", sensorData)
      .then(() => {
        notification.success({
          message: "Update success",
          duration: 1,
          onClose: () => {
            navigate("/sensordata")
          },
        })
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <div className="Title-CreateUser">
        <Title level={3}>Update Sensor Data</Title>
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
              value={sensorData.id}
              className="Modal-input"
              disabled
            />
          </Form.Item>
          <Form.Item
            label="Sensor ID"
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
              value={sensorData.sensorID}
              onChange={(e) =>
                setSensorData({ ...sensorData, sensorID: e.target.value })
              }
              className="Modal-input"
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
              time="time"
              value={sensorData.time}
              onChange={(e) =>
                setSensorData({ ...sensorData, time: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Type"
            rules={[
              {
                required: true,
                message: "Please enter your type",
              },
            ]}
          >
            <Input
              type="type"
              value={sensorData.type}
              onChange={(e) =>
                setSensorData({ ...sensorData, type: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Location ID"
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
              value={sensorData.locationID}
              onChange={(e) =>
                setSensorData({ ...sensorData, locationID: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="SerialNo"
            rules={[
              {
                required: true,
                message: "Please enter your serialNo",
              },
            ]}
          >
            <Input
              serialNo="serialNo"
              value={sensorData.serialNo}
              onChange={(e) =>
                setSensorData({ ...sensorData, serialNo: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Field"
            rules={[
              {
                required: true,
                message: "Please enter your field",
              },
            ]}
          >
            <Input
              field="field"
              value={sensorData.field}
              onChange={(e) =>
                setSensorData({ ...sensorData, field: e.target.value })
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
export default SensorDataPageUpdate
