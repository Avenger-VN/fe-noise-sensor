import { useEffect, useState } from "react"
import { Form } from "antd"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import UpdateSensor from "../../components/sensor/SensorFormUpdate"

const SensorUpdate = () => {
  const [sensor, setSensor] = useState([])
  const { name } = useParams()
  const [form] = Form.useForm()
  const nav = useNavigate()
  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/api/v1/get-all-sensor?limit=10&page=1/${name}`,
      )
      .then((res) => setSensor(res.data.data.sensor))
      .catch((err) => console.log(err))
  }, [name])

  function onUpdate() {
    axios
      .put(`http://localhost:3030/sensor/${name}`, sensor)
      .then(() => {
        alert("data update success")
        nav("/sensor")
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
