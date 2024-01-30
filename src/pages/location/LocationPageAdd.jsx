import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AddFormLocation from "../../components/location/LocationFormAdd"
import { createLocation } from "../../api/path"
import { notification } from "antd"

function LocationAdd() {
  const [inputData, setInputData] = useState([])
  const navigate = useNavigate()
  function onFinish() {
    createLocation("create-location", inputData)
      .then(() => {
        notification.success({
          message: "Create success",
          duration: 1,
          onClose: () => {
            navigate("/location")
          },
        })
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
