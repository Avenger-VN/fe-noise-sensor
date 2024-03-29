import React from "react"
import { Form, Input, Button } from "antd"
import { Select } from "antd"
import { Option } from "antd/es/mentions"
import { Typography } from "antd"
import { Link } from "react-router-dom"
const { Title } = Typography

const AddFormUser = ({ form, onFinish, setInputData, inputData }) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
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
                message: "Please enter your first name",
              },
              {
                pattern: /^[a-zA-Z]+$/,
                message: "Please enter a first name with only letters",
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
              placeholder="Type your first name"
              onChange={(e) =>
                setInputData({ ...inputData, firstName: e.target.value })
              }
              firstName="firstName"
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
            name="lastName"
            label="Last Name"
          >
            <Input
              className="Modal-input"
              placeholder="Type your last name"
              onChange={(e) =>
                setInputData({ ...inputData, lastName: e.target.value })
              }
              lastName="lastName"
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
            name="email"
            label="Email"
          >
            <Input
              className="Modal-input"
              placeholder="Type your email"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
              email="email"
            />
          </Form.Item>
          <Form.Item
            name="roleID"
            label="Role ID"
            rules={[
              {
                required: true,
                message: "Please chose your role ID",
              },
            ]}
          >
            <Select
              style={{ width: "370px", float: "right" }}
              placeholder="Chose role ID"
              onChange={(value) =>
                setInputData({ ...inputData, roleID: value })
              }
              roleID="roleID"
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
            </Select>
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
              {
                whitespace: true,
                min: 6,
                message: "Please enter more than 5 characters",
              },
            ]}
            name="password"
            label="Password"
          >
            <Input.Password
              className="Modal-input"
              placeholder="Type your password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
              password="password"
            />
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
            name="address"
            label="Address"
          >
            <Input
              className="Modal-input"
              placeholder="Type your address"
              onChange={(e) =>
                setInputData({ ...inputData, address: e.target.value })
              }
              address="address"
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
            name="phone"
            label="Phone"
          >
            <Input
              className="Modal-input"
              placeholder="Type your phone number"
              onChange={(e) =>
                setInputData({ ...inputData, phone: e.target.value })
              }
              phone="phone"
            />
          </Form.Item>

          <Form.Item>
            <div className="Btn-Back-Save">
              <Button
                className="AddUser-Form-Btn-Save"
                type="primary"
                htmlType="submit"
              >
                Save
              </Button>
              <Link to="/user">
                <Button className="AddUser-Form-Btn-Back" htmlType="submit">
                  Back
                </Button>
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default AddFormUser
