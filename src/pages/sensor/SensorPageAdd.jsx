import AddFormSensor from "../../components/sensor/SensorFormAdd"
import { message } from "antd"
import { useNavigate } from "react-router-dom"
import { createSensor } from "../../api/sensor"

const SensorAdd = () => {
  const nav = useNavigate()
  const onFinish = (inputData) => {
    console.log(inputData)
    createSensor(inputData)
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
    <>
      <AddFormSensor onFinish={onFinish} />
    </>
  )
}
export default SensorAdd
