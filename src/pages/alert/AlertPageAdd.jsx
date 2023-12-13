import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AlertFormAdd from "../../components/alert/AlertFormAdd"

function AlertAdd() {
  const [inputData, setInputData] = useState([])
  const navigate = useNavigate()
  function onFinish() {
    axios
      .post("http://localhost:8888/api/v1/create-alert", inputData)
      .then(() => {
        alert("Data succes")
        navigate("/alert")
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
