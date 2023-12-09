import { useState } from "react"
import AddFormSensor from "../../components/sensor/SensorFormAdd"
import { Form, message } from "antd"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SensorAdd = () => {
  const [inputData, setInputData] = useState([])
  const [form] = Form.useForm()
  const nav = useNavigate()
  const onFinish = () => {
    axios
      .post("http://localhost:8888/api/v1/create-sensor", inputData)
      .then(() => {
        message.success("Create success")
        nav("/sensor")
      })
      .catch((err) => {
        console.error("Error creating data:", err)
        console.log("Response data:", err.response.data)
        console.log("Status code:", err.response.status)
      })
  }
  return (
    <div>
      <div>
        <AddFormSensor
          form={form}
          onFinish={onFinish}
          data={inputData}
          setData={setInputData}
        />
      </div>
    </div>
  )
}
export default SensorAdd
