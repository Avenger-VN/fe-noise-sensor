import { Button, Form, Input, Typography } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
const { Title } = Typography

function Update() {
  const { id } = useParams()
  const [location, setLocation] = useState({
    id: "",
    name: "",
    address: "",
    latitude: "",
    longtitude: "",
  })
  const navi = useNavigate()
  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/api/v1/get-all-location?limit=10&page=1/${id}`,
      )
      .then((res) => setLocation(res.data.data.location))
      .catch((err) => console.log(err))
  }, [id])

  function onUpdate() {
    axios
      .put(`http://localhost:8888/api/v1/update-location/${id}`, location)
      .then(() => {
        alert("data update success")
        navi("/location")
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
          <Form.Item label="Id">
            <Input
              name="id"
              value={location.id}
              readOnly
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item label="Name">
            <Input
              name="name"
              value={location.name}
              onChange={(e) =>
                setLocation({ ...location, name: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item label="Address">
            <Input
              address="address"
              value={location.address}
              onChange={(e) =>
                setLocation({ ...location, address: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item label="Latitude">
            <Input
              latitude="latitude"
              value={location.latitude}
              onChange={(e) =>
                setLocation({ ...location, latitude: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item label="Longtitude">
            <Input
              longtitude="longtitude"
              value={location.longtitude}
              onChange={(e) =>
                setLocation({ ...location, longtitude: e.target.value })
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
