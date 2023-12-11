import { message } from "antd"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AddFormLocation from "../../components/location/LocationFormAdd"

function LocationAdd() {
  const [inputData, setInputData] = useState([])
  const navigate = useNavigate()
  function onFinish() {
    axios
      .post("http://localhost:8888/api/v1/create-location", inputData)
      .then(() => {
        message.success("Create success")
        navigate("/location")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <AddFormLocation
        onFinish={onFinish}
        setInputData={setInputData}
        inputData={inputData}
      />
    </div>
  )
}
export default LocationAdd
