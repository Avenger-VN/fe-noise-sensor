import React from "react"
import { Form, Input, Button } from "antd"
import { Typography } from "antd"
import { Link } from "react-router-dom"
const { Title } = Typography

const UpdateSensor = ({ form, onFinish }) => {
  return (
    <div>
      <div className="Title-CreateUser">
        <Title level={3}>Edit Sensor</Title>
      </div>
      <div className="All-AddUser-Form">
        <Form className="AddUser-Form" form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
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
            <Input className="Modal-input" placeholder="Type your name" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your last description",
              },
              {
                pattern: /^[a-zA-Z]+$/,
                message: "Please enter a last description with only letters",
              },
              {
                whitespace: true,
                min: 3,
                message: "Please enter more than 2 characters",
              },
            ]}
            name="description"
            label="Description"
          >
            <Input
              className="Modal-input"
              placeholder="Type your description"
            />
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your type",
              },
            ]}
            name="type"
            label="Type"
          >
            <Input className="Modal-input" placeholder="Type your type" />
          </Form.Item>

          <Form.Item>
            <Link to="/sensor">
              <Button className="AddUser-Form-Btn-Back" htmlType="submit">
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

export default UpdateSensor
