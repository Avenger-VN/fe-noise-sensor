import { Typography } from "antd"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import { Card } from "antd"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
function Statistical() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Statistical",
      },
    },
  }
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const data = {
    labels,
    datasets: [
      {
        label: "Date",
        data: labels.map(() => Math.random()),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "dB(A)",
        data: labels.map(() => Math.random()),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }

  return (
    <div>
      <div>
        <Typography.Title level={3}>Statistical</Typography.Title>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <Card style={{ width: 700, height: 350 }}>
            <Bar
              style={{ width: 700, height: 350 }}
              options={options}
              data={data}
            />
          </Card>
        </div>
        <div>
          <Card style={{ marginLeft: 20, width: 350, height: 350 }}>
            <Typography.Title level={4}>Notes</Typography.Title>
            <div>
              <Typography.Text strong>
                Date: Days with warnings over 60 times
              </Typography.Text>
            </div>
            <div>
              <Typography.Text strong>
                dB(A): Take the measured average for the month
              </Typography.Text>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Statistical
