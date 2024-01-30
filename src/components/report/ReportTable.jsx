const ReportTable = () => {
  const Minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
  const newDate = new Date()
  const formattedDate = `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`

  return (
    <div>
      <table className="report-table">
        <thead>
          <tr className="table-title">
            <th rowSpan="2">Date</th>
            <th rowSpan="2">Hours</th>
            <th colSpan="12">Minutes</th>
          </tr>
          <tr>
            {Minutes.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="25">{formattedDate}</td>
          </tr>
          {Array(24)
            .fill()
            .map((_, rowIndex) => (
              <tr key={rowIndex}>
                <th>{rowIndex}</th>
                {Minutes.map((item, colIndex) => (
                  <td key={colIndex}>{item}</td>
                ))}
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <th rowSpan="2">Date</th>
            <th rowSpan="2">Hours</th>
            {Minutes.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
          <tr className="table-title">
            <th colSpan="12">Minutes</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default ReportTable
