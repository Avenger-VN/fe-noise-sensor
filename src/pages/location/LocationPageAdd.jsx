import { message } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AddFormLocation from "../../components/location/LocationFormAdd"
import { createLocation } from "../../api/location"

function LocationAdd() {
  const [inputData, setInputData] = useState([])
  const navigate = useNavigate()
  function onFinish() {
    createLocation(inputData)
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
