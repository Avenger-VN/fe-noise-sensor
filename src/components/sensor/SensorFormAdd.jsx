import { useState } from "react"
import React from "react"
import { Form, Button } from "antd"
import { Typography } from "antd"
import { Link } from "react-router-dom"
import InputField from "./components/input-field"
const { Title } = Typography

const AddFormSensor = ({ onFinish }) => {
  const [data, setData] = useState([])
  const [form] = Form.useForm()

  return (
    <div>
      <div className="Title-CreateUser">
        <Title level={3}>Create Sensor</Title>
      </div>
      <div className="All-AddUser-Form">
        <Form className="AddUser-Form" form={form} onFinish={onFinish}>
          <InputField
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
            placeholder="Type your name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <InputField
            name="description"
            label="Description"
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
            placeholder="Type your name"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
          <InputField
            name="type"
            label="Type"
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
            placeholder="Type your type"
            onChange={(e) => setData({ ...data, type: e.target.value })}
          />

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

export default AddFormSensor
