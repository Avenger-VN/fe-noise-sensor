import { Form, Input, Button } from "antd"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const OrderAdd = () => {
  const [values, setValues] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  })
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const onFinish = (event) => {
    event.preventDefault()
    axios
      .post("https://jsonplaceholder.typicode.com/users", values)
      .then((res) => {
        console.log(res)
        navigate("/orders")
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="id" label="ID">
          <Input
            className="Modal-input"
            onChange={(e) => setValues({ ...values, id: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="name" label="Name">
          <Input
            className="Modal-input"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="username" label="UserName">
          <Input
            className="Modal-input"
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input
            className="Modal-input"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </Form.Item>

        <Form.Item>
          <Link to="/orders">
            <Button className="Modal-button" type="primary" htmlType="submit">
              Back
            </Button>
          </Link>
          <Button className="Modal-button" type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default OrderAdd
