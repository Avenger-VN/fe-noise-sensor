import { Button, Form, Input, Typography } from "antd"
import { Link } from "react-router-dom"
const { Title } = Typography
const AddFormLocation = ({ onFinish, setInputData, inputData }) => {
  return (
    <div>
      <div className="Title-CreateUser">
        <Title level={3}>Create Location</Title>
      </div>
      <div className="All-AddUser-Form">
        <Form onFinish={onFinish} className="AddUser-Form">
          <Form.Item
            label="Name"
            name="name"
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
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please enter your address",
              },
            ]}
          >
            <Input
              address="address"
              onChange={(e) =>
                setInputData({ ...inputData, address: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Latitude"
            name="latitude"
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
              onChange={(e) =>
                setInputData({ ...inputData, latitude: e.target.value })
              }
              className="Modal-input"
            />
          </Form.Item>
          <Form.Item
            label="Longitude"
            name="longitude"
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
              longitude="longitude"
              onChange={(e) =>
                setInputData({ ...inputData, longitude: e.target.value })
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
export default AddFormLocation
