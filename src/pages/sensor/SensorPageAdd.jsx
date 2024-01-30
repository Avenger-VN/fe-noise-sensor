import AddFormSensor from "../../components/sensor/SensorFormAdd"

import { Form } from "antd"
import { useNavigate } from "react-router-dom"
import { createSensor } from "../../api/path"
import { notification } from "antd"

const SensorAdd = () => {
  const [inputData, setInputData] = useState([])
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const onFinish = () => {
    createSensor("create-sensor", inputData)

      .then(() => {
        notification.success({
          message: "Create success",
          duration: 1,
          onClose: () => {
            navigate("/sensor")
          },
        })
      })
      .catch((err) => {
        console.error("Error creating data:", err)
      })
  }
  return (
    <>
      <AddFormSensor onFinish={onFinish} />
    </>
  )
}
export default SensorAdd
