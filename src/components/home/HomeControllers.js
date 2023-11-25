function getRandomNumber() {
  return Math.round(Math.random() * 140 + 1)
}

// const currentTime = new Date()
// const currentHour = currentTime.getHours()
// const currentMinute = currentTime.getMinutes()
function displayTime() {
  const result = []
  for (let hours = 0; hours < 24; hours++) {
    for (let minutes = 0; minutes < 60; minutes += 5) {
      let formattedHours = hours < 10 ? "0" + hours : hours
      let formattedMinutes = minutes < 10 ? "0" + minutes : minutes

      result.push(formattedHours + ":" + formattedMinutes)
    }
  }
  return result
}
const time = displayTime()

// const formattedTime = `${currentHour}:${currentMinute}`
const data = []
for (let i = 0; i < 288; i++) {
  data.push({
    key: "i",
    time: time[i],
    dba: getRandomNumber(),
    location: "TP HCM",
  })
}

export default data
