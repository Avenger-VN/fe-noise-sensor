import { Button, Form, Input, Typography } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link, useParams } from "react-router-dom"
import { getLocation, update } from "../../api/path"
import { notification } from "antd"
const { Title } = Typography

function Update() {
  const { id } = useParams()
  const [location, setLocation] = useState({})

  const navigate = useNavigate()
  useEffect(() => {
    getLocation(id)
      .then((res) => {
        setLocation(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [id])

  function onUpdate() {
    update("update-location", location)
      .then(() => {
        notification.success({
          message: "Update success",
          duration: 1,
          onClose: () => {
            navigate("/location")
          },
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <div className="Title-CreateUser">
        <Title level={3}>Update Location</Title>
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
              value={location.id}
              onChange={(e) => setLocation({ ...location, id: e.target.value })}
              className="Modal-input"
              disabled
            />
          </Form.Item>
          <Form.Item
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              {
                pattern: /^[a-zA-Z]+$/,
                message: "Please enter a name with only letters",
              },
              {
                whitespace: true,
                min: 3,
                message: "Please enter more than 2 characters",
              },
            ]}
          >
            <Input
              name="name"
              value={location.name}
              onChange={(e) =>
                setLocation({ ...location, name: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Address"
            rules={[
              {
                required: true,
                message: "Please enter your address",
              },
            ]}
          >
            <Input
              name="address"
              value={location.address}
              onChange={(e) =>
                setLocation({ ...location, address: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Latitude"
            rules={[
              {
                required: true,
                message: "Please enter your latitude",
              },
              {
                pattern: /^[1-9]\d*$/,
                message: "Latitude must contain only numbers",
              },
            ]}
          >
            <Input
              latitude="latitude"
              value={location.latitude}
              onChange={(e) =>
                setLocation({ ...location, latitude: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Longitude"
            rules={[
              {
                required: true,
                message: "Please enter your longitude",
              },
              {
                pattern: /^[1-9]\d*$/,
                message: "Latitude must contain only numbers",
              },
            ]}
          >
            <Input
              name="longitude"
              value={location.longitude}
              onChange={(e) =>
                setLocation({ ...location, longitude: e.target.value })
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
            <Link to={"/location"}>
              <Button className="AddUser-Form-Btn-Back">Back</Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
export default Update
