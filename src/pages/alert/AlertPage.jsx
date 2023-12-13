import { Button, Typography } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { message } from "antd"
import AlertTable from "../../components/alert/AlertTable"
import { PlusOutlined } from "@ant-design/icons"

const { Title } = Typography

const Alert = () => {
  const [alert, setAlert] = useState([])

  const fetchData = () => {
    axios
      .get("http://localhost:8888/api/v1/get-all-alert?limit=10&page=1")
      .then((res) => {
        setAlert(res.data.data.alert)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = (record) => {
    axios
      .delete(`http://localhost:8888/api/v1/delete-alert/${record.id}`)
      .then(() => {
        message.success("Delete success")
        fetchData()
      })
      .catch((err) => console.log(err))
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
