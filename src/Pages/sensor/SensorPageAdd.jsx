import { useState } from "react"
import AddSensor from "../../allMethodPages/sensorMethod/SensorFormAdd"
import { Form } from "antd"

const SensorAdd = () => {
  const [data, setData] = useState([])
  const [form] = Form.useForm()

  const onFinish = (values) => {
    setData([...data, values])
    form.resetFields()
  }
  return (
    <div>
      <div>
        <AddSensor form={form} onFinish={onFinish} />
      </div>
    </div>
  )
}
export default SensorAdd
