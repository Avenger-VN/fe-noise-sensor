import React, { useState } from "react"
import { Form } from "antd"
import AddFormUser from "../../components/user/UserFormAdd"
// import SourceDataUser from "../../UserMethod/Controllers"
// import UserTable from "../../UserMethod/UserTable"
const UserAdd = () => {
  const [data, setData] = useState([])
  const [form] = Form.useForm()

  const onFinish = (values) => {
    setData([...data, values])
    form.resetFields()
  }
  return (
    <div>
      <div>
        <AddFormUser form={form} onFinish={onFinish} />
      </div>
    </div>
  )
}

export default UserAdd
