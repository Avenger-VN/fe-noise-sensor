import React, { useState } from "react"
import { Button, Form } from "antd"
import UserTable from "../../UserMethod/UserTable"
import AddUserModal from "../../UserMethod/AddUserModal"

const User = () => {
  const [data, setData] = useState([])
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [form] = Form.useForm()

  const handleAdd = () => {
    setIsFormVisible(true)
  }

  const handleDelete = (record) => {
    const filteredData = data.filter((item) => item !== record)
    setData(filteredData)
  }

  const onFinish = (values) => {
    setData([...data, values])
    setIsFormVisible(false)
    form.resetFields()
  }

  return (
    <div>
      <div style={{ float: "right", padding: "20px 20px 20px 0px" }}>
        <Button onClick={handleAdd}>Add User</Button>
      </div>
      <UserTable data={data} handleDelete={handleDelete} />
      <AddUserModal
        visible={isFormVisible}
        handleCancel={() => setIsFormVisible(false)}
        form={form}
        onFinish={onFinish}
      />
    </div>
  )
}

export default User
