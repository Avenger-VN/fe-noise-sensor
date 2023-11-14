import React from "react"
import { Form, Input, Button } from "antd"
import { Select } from "antd"
import { Option } from "antd/es/mentions"
import { Typography } from "antd"
import { Link } from "react-router-dom"
const { Title } = Typography

const AddUser = ({ form, onFinish }) => {
  return (
    <div>
      <div className="Title-CreateUser">
        <Title level={3}>Create User</Title>
      </div>
      <div className="All-AddUser-Form">
        <Form className="AddUser-Form" form={form} onFinish={onFinish}>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input className="Modal-input" placeholder="First Name" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
              },
            ]}
            name="lastName"
            label="Last Name"
          >
            <Input className="Modal-input" placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
              },
            ]}
            name="email"
            label="Email"
          >
            <Input className="Modal-input" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="roleID"
            label="Role ID"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select style={{ width: "370px", float: "right" }}>
              <Option value="admin">Admin</Option>
              <Option value="customer">Customer</Option>
            </Select>
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
              },
            ]}
            name="password"
            label="Password"
          >
            <Input className="Modal-input" placeholder="Password" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
              },
            ]}
            name="address"
            label="Address"
          >
            <Input className="Modal-input" placeholder="Adress" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
              },
            ]}
            name="phone"
            label="Phone"
          >
            <Input className="Modal-input" placeholder="Phone Number" />
          </Form.Item>

          <Form.Item>
            <Link to="/user">
              <Button
                className="AddUser-Form-Btn-Back"
                type="primary"
                htmlType="submit"
              >
                Back
              </Button>
            </Link>
            <Button
              className="AddUser-Form-Btn-Save"
              type="primary"
              htmlType="submit"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default AddUser
