import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AlertFormAdd from "../../components/alert/AlertFormAdd"
import { createAlert } from "../../api/path"
import { notification } from "antd"

function AlertAdd() {
  const [inputData, setInputData] = useState([])
  const navigate = useNavigate()
  function onFinish() {
    createAlert("create-alert", inputData)
      .then(() => {
        notification.success({
          message: "Create success",
          duration: 1,
          onClose: () => {
            navigate("/alert")
          },
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <AlertFormAdd
        onFinish={onFinish}
        setInputData={setInputData}
        inputData={inputData}
      />
    </div>
  )
}
export default AlertAdd
