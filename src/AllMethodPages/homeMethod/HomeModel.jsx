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
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Notification",
    key: "notification",
    render: (payload) => {
      return <p style={{ color: "red" }}>{payload.dba > 70 ? "Warning" : ""}</p>
    },
  },
]

export default columns
