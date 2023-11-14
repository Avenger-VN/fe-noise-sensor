import React, { useState } from "react"
import { Form } from "antd"
import AddUser from "../../UserMethod/AddUser"
// import SourceDataUser from "../../UserMethod/Controllers"
// import UserTable from "../../UserMethod/UserTable"
const UserAdd = () => {
  const [data, setData] = useState([])
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [form] = Form.useForm()

  // const handleDelete = (record) => {
  //   const filteredData = data.filter((item) => item !== record)
  //   setData(filteredData)
  //   message.success("Click on Yes")
  // }
  const onFinish = (values) => {
    setData([...data, values])
    setIsFormVisible(false)
    form.resetFields()
  }
  return (
    <div>
      <div>
        <AddUser
          visible={isFormVisible}
          handleCancel={() => setIsFormVisible(false)}
          form={form}
          onFinish={onFinish}
        />
      </div>
      {/* <UserTable data={data} handleDelete={handleDelete} /> */}
    </div>
  )
}

export default UserAdd
