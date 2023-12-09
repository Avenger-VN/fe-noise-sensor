import React from "react"
import { Form, Input, Button } from "antd"
import { Typography } from "antd"
import { Link } from "react-router-dom"
const { Title } = Typography

const UpdateSensor = ({ form, onFinish, data, setData }) => {
  return (
    <div>
      <div className="Title-CreateUser">
        <Title level={3}>Update Sensor</Title>
      </div>
      <div className="All-AddUser-Form">
        <Form className="AddUser-Form" form={form} onFinish={onFinish}>
          <Form.Item
            name="id"
            label="ID"
            rules={[
              {
                required: true,
                message: "Please enter your id",
              },
            ]}
          >
            <Input
              name="id"
              className="Modal-input"
              placeholder="Type your id"
              value={data.id}
            />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
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
              className="Modal-input"
              placeholder="Type your name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your last description",
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
              description="description"
              className="Modal-input"
              placeholder="Type your description"
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
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
            <Input
              type="type"
              className="Modal-input"
              placeholder="Type your type"
              onChange={(e) => setData({ ...data, type: e.target.value })}
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
              <Link to="/sensor">
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

export default UpdateSensor
