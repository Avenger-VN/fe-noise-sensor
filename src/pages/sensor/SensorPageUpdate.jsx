import { useEffect, useState } from "react"
import { Form } from "antd"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import UpdateSensor from "../../components/sensor/SensorFormUpdate"
import { notification } from "antd"

const SensorUpdate = () => {
  const [sensor, setSensor] = useState([])
  const { id } = useParams()
  const [form] = Form.useForm()
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:8888/api/v1/get-sensor/${id}`)
      .then((res) => {
        setSensor(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [id])
  function onUpdate() {
    axios
      .put("http://localhost:8888/api/v1/update-sensor", sensor)
      .then(() => {
        notification.success({
          message: "Create success",
          duration: 1,
          onClose: () => {
            navigate("/sensor")
          },
        })
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <div>
        <UpdateSensor
          form={form}
          onFinish={onUpdate}
          data={sensor}
          setData={setSensor}
        />
      </div>
    </div>
  )
}
export default SensorUpdate
