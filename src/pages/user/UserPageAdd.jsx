import React, { useState } from "react"
import { Form } from "antd"
import AddFormUser from "../../components/user/UserFormAdd"
import { useNavigate } from "react-router-dom"
import { notification } from "antd"
import { createUser } from "../../api"
const UserAdd = () => {
  const [user, setUser] = useState([])
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const onFinish = () => {
    createUser("create-user", user)
      .then(() => {
        notification.success({
          message: "Create success",
          duration: 1,
          onClose: () => {
            navigate("/user")
          },
        })
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <div>
        <AddFormUser
          form={form}
          onFinish={onFinish}
          setInputData={setUser}
          inputData={user}
        />
      </div>
    </div>
  )
}

export default UserAdd
