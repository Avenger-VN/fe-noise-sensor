function getRandomNumber() {
  return Math.round(Math.random() * 140 + 1)
}

const currentTime = new Date()
const currentHour = currentTime.getHours()
const currentMinute = currentTime.getMinutes()

const formattedTime = `${currentHour}:${currentMinute}`
const data = []
for (let i = 0; i < 25; i++) {
  data.push({
    key: "i",
    time: formattedTime,
    dba: getRandomNumber(),
    address: "TP HCM",
  })
}

export default data
