const columns = [
  {
    title: "Time ",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "dB(A)",
    dataIndex: "dba",
    key: "dba",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Notification",
    key: "notification",
    render: (payload) => {
      return <p style={{ color: "red" }}>{payload.dba > 50 ? "Warning" : ""}</p>
    },
  },
]

export default columns
