import { Button, Typography } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AlertTable from "../../components/alert/AlertTable"
import { PlusOutlined } from "@ant-design/icons"
import { deleteAlert, getAlerts } from "../../api"
import { notification } from "antd"

const { Title } = Typography

const Alert = () => {
  const [alert, setAlert] = useState([])

  const fetchData = async () => {
    try {
      const res = await getAlerts({ limit: 10, page: 1 })
      setAlert(res.data.data.alert)
    } catch (err) {
      console.log()
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  const handleDelete = async (record) => {
    await deleteAlert(`${record.id}`)
    notification.success({
      message: "Delete success",
      duration: 1,
    })
    fetchData()
  }

  return (
    <div>
      <div>
        <Title level={3}>Alert Details</Title>
      </div>
      <div className="All-Add-style">
        <Link to="/alert/alert-add">
          <Button type="primary">
            <PlusOutlined />
            Add Alert
          </Button>
        </Link>
      </div>
      <AlertTable data={alert} handleDelete={handleDelete} />
    </div>
  )
}

export default Alert
