import React, { useEffect, useState } from "react"
import { Form, Input, Button } from "antd"
import { Select } from "antd"
import { Option } from "antd/es/mentions"
import { Typography } from "antd"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getUser, update } from "../../api"
import { notification } from "antd"

const { Title } = Typography
const UserUpdate = () => {
  const [user, setUser] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    getUser(id)
      .then((res) => {
        setUser(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [id])
  function onUpdate() {
    update("update-user", user)
      .then(() => {
        notification.success({
          message: "Update success",
          duration: 1,
          onClose: () => {
            navigate("/user")
          },
        })
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <div className="Title-CreateUser">
        <Title level={3}>Edit User</Title>
      </div>
      <div className="All-AddUser-Form">
        <Form className="AddUser-Form" onFinish={onUpdate}>
          <Form.Item
            label="ID"
            rules={[
              {
                required: true,
                message: "Please enter your latitude",
              },
            ]}
          >
            <Input name="id" value={user.id} className="Modal-input" disabled />
          </Form.Item>
          <Form.Item
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please enter your first name",
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
              className="Modal-input"
              name="firstName"
              placeholder="Type your first name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your last name",
              },
              {
                pattern: /^[a-zA-Z]+$/,
                message: "Please enter a last name with only letters",
              },
              {
                whitespace: true,
                min: 3,
                message: "Please enter more than 2 characters",
              },
            ]}
            label="Last Name"
          >
            <Input
              className="Modal-input"
              name="lastName"
              placeholder="Type your last name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your email name",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            label="Email"
          >
            <Input
              className="Modal-input"
              name="email"
              value={user.email}
              placeholder="Type your email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            label="Role ID"
            rules={[
              {
                required: true,
                message: "Please chose your role ID",
              },
            ]}
          >
            <Select
              name="roleID"
              style={{ width: "370px", float: "right" }}
              placeholder="Chose role ID"
              value={user.roleID}
            >
              <Option value="admin">Admin</Option>
              <Option value="customer">Customer</Option>
            </Select>
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your address",
              },
              {
                whitespace: true,
                min: 3,
                message: "Please enter more than 2 characters",
              },
            ]}
            label="Address"
          >
            <Input
              className="Modal-input"
              placeholder="Type your address"
              name="address"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your phone number",
              },
              {
                pattern: /^0\d{9}$/,
                message:
                  "Phone number must start with 0 and be followed by 9 digits!",
              },
            ]}
            label="Phone"
          >
            <Input
              className="Modal-input"
              placeholder="Type your phone number"
              name="phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
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
            <Link to={"/user"}>
              <Button className="AddUser-Form-Btn-Back">Back</Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
export default UserUpdate
